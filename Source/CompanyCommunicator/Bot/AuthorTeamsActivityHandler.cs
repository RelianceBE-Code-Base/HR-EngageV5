// <copyright file="AuthorTeamsActivityHandler.cs" company="Microsoft">
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// </copyright>

namespace Microsoft.Teams.Apps.CompanyCommunicator.Bot
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Bot.Builder;
    using Microsoft.Bot.Builder.Teams;
    using Microsoft.Bot.Schema;
    using Microsoft.Bot.Schema.Teams;
    using Microsoft.Extensions.Localization;
    using Microsoft.Teams.Apps.CompanyCommunicator.Common.Resources;
    using Microsoft.Teams.Apps.CompanyCommunicator.Common.Services;
    using Microsoft.Teams.Apps.CompanyCommunicator.Common.Services.User;

    /// <summary>
    /// Company Communicator Author Bot.
    /// Captures author data, file upload.
    /// </summary>
    public class AuthorTeamsActivityHandler : TeamsActivityHandler
    {
        private const string ChannelType = "channel";
        private readonly TeamsFileUpload teamsFileUpload;
        private readonly IUserDataService userDataService;
        private readonly IAppSettingsService appSettingsService;
        private readonly IStringLocalizer<Strings> localizer;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthorTeamsActivityHandler"/> class.
        /// </summary>
        /// <param name="teamsFileUpload">File upload service.</param>
        /// <param name="userDataService">User data service.</param>
        /// <param name="appSettingsService">App Settings service.</param>
        /// <param name="localizer">Localization service.</param>
        public AuthorTeamsActivityHandler(
            TeamsFileUpload teamsFileUpload,
            IUserDataService userDataService,
            IAppSettingsService appSettingsService,
            IStringLocalizer<Strings> localizer)
        {
            this.userDataService = userDataService ?? throw new ArgumentNullException(nameof(userDataService));
            this.teamsFileUpload = teamsFileUpload ?? throw new ArgumentNullException(nameof(teamsFileUpload));
            this.appSettingsService = appSettingsService ?? throw new ArgumentNullException(nameof(appSettingsService));
            this.localizer = localizer ?? throw new ArgumentNullException(nameof(localizer));
        }

        /// <summary>
        /// Invoked when a conversation update activity is received from the channel.
        /// </summary>
        /// <param name="turnContext">The context object for this turn.</param>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects
        /// or threads to receive notice of cancellation.</param>
        /// <returns>A task that represents the work queued to execute.</returns>
        protected override async Task OnConversationUpdateActivityAsync(
            ITurnContext<IConversationUpdateActivity> turnContext,
            CancellationToken cancellationToken)
        {
            // base.OnConversationUpdateActivityAsync is useful when it comes to responding to users being added to or removed from the conversation.
            // For example, a bot could respond to a user being added by greeting the user.
            // By default, base.OnConversationUpdateActivityAsync will call <see cref="OnMembersAddedAsync(IList{ChannelAccount}, ITurnContext{IConversationUpdateActivity}, CancellationToken)"/>
            // if any users have been added or <see cref="OnMembersRemovedAsync(IList{ChannelAccount}, ITurnContext{IConversationUpdateActivity}, CancellationToken)"/>
            // if any users have been removed. base.OnConversationUpdateActivityAsync checks the member ID so that it only responds to updates regarding members other than the bot itself.
            await base.OnConversationUpdateActivityAsync(turnContext, cancellationToken);

            var activity = turnContext.Activity;

            // Take action if the event includes the bot being added.
            var membersAdded = activity.MembersAdded;
            if (membersAdded != null && membersAdded.Any(p => p.Id == activity.Recipient.Id))
            {
                if (activity.Conversation.ConversationType.Equals(ChannelType))
                {
                    await this.userDataService.SaveAuthorDataAsync(activity);
                }
            }

            if (activity.MembersRemoved != null)
            {
                await this.userDataService.RemoveAuthorDataAsync(activity);
            }

            // Update service url app setting.
            await this.UpdateServiceUrl(activity.ServiceUrl);
        }

        /// <summary>
        /// Invoke when a file upload accept consent activitiy is received from the channel.
        /// </summary>
        /// <param name="turnContext">The context object for this turn.</param>
        /// <param name="fileConsentCardResponse">The accepted response object of File Card.</param>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects
        /// or threads to receive notice of cancellation.</param>
        /// <returns>A task reprsenting asynchronous operation.</returns>
        protected override async Task OnTeamsFileConsentAcceptAsync(
            ITurnContext<IInvokeActivity> turnContext,
            FileConsentCardResponse fileConsentCardResponse,
            CancellationToken cancellationToken)
        {
            var (fileName, notificationId) = this.teamsFileUpload.ExtractInformation(fileConsentCardResponse.Context);
            try
            {
                await this.teamsFileUpload.UploadToOneDrive(
                    fileName,
                    fileConsentCardResponse.UploadInfo.UploadUrl,
                    cancellationToken);

                await this.teamsFileUpload.FileUploadCompletedAsync(
                    turnContext,
                    fileConsentCardResponse,
                    fileName,
                    notificationId,
                    cancellationToken);
            }
            catch (Exception e)
            {
                await this.teamsFileUpload.FileUploadFailedAsync(
                    turnContext,
                    notificationId,
                    e.ToString(),
                    cancellationToken);
            }
        }

          //Start Modification 2
        // Greet when users are added to the conversation.
        // Note that all channels do not send the conversation update activity.
        // If you find that this bot works in the emulator, but does not in
        // another channel the reason is most likely that the channel does not
        // send this activity.
        protected override async Task OnMembersAddedAsync(IList<ChannelAccount> membersAdded, ITurnContext<IConversationUpdateActivity> turnContext, CancellationToken cancellationToken)
        {
            foreach (var member in membersAdded)
            {
                if (member.Id != turnContext.Activity.Recipient.Id)
                {
                    //await turnContext.SendActivityAsync($"Hi there - {member.Name}. {WelcomeMessage}", cancellationToken: cancellationToken);
                    //await turnContext.SendActivityAsync(InfoMessage, cancellationToken: cancellationToken);
                    //await turnContext.SendActivityAsync($"{LocaleMessage} Current locale is '{turnContext.Activity.GetLocale()}'.", cancellationToken: cancellationToken);
                    //await turnContext.SendActivityAsync(PatternMessage, cancellationToken: cancellationToken);


                    var card = new HeroCard
                {
                     Title = "HR Engage Admin!",
                            Text = $"Thank you for adding HR Engage Admin Tab. <br><br> HR Engage is a comprehensive solution for enhancing employees engagement within organizations.  Allowing broadcasting of messages to multiple teams and individuals through channel posts and chat messages.<hr><ul><li>This message is to notify you that you have successfully added the HR Engage Admin Tab.</li><li>You can create messages, configure your audience, and view and download delivery stats.</li><li>To make sure you can choose any Team on the audience configuration page when broadcasting a message, you need to add the User app (HR Engage Bot) to all the Teams you want to be able to select.</li></ul><br><br>",
                            Buttons = new List<CardAction>()
                            {
                                new CardAction(ActionTypes.OpenUrl, "Get an overview", null, "Get an overview", "Get an overview", "https://hr-engage.azurewebsites.net")
                            },
                    Images = new List<CardImage>() { new CardImage("https://raw.githubusercontent.com/RelianceBE-Code-Base/HR-EngageV5/master/Source/CompanyCommunicator/ClientApp/public/image/HREngage.png") },

                };

                    var response = MessageFactory.Attachment(card.ToAttachment());
                    await turnContext.SendActivityAsync(response, cancellationToken);


                }
            }
        }
        //End Modification
    

        /// <summary>
        /// Invoke when a file upload decline consent activitiy is received from the channel.
        /// </summary>
        /// <param name="turnContext">The context object for this turn.</param>
        /// <param name="fileConsentCardResponse">The declined response object of File Card.</param>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects
        /// or threads to receive notice of cancellation.</param>
        /// <returns>A task reprsenting asynchronous operation.</returns>
        protected override async Task OnTeamsFileConsentDeclineAsync(ITurnContext<IInvokeActivity> turnContext, FileConsentCardResponse fileConsentCardResponse, CancellationToken cancellationToken)
        {
            var (fileName, notificationId) = this.teamsFileUpload.ExtractInformation(
                fileConsentCardResponse.Context);

            await this.teamsFileUpload.CleanUp(
                turnContext,
                fileName,
                notificationId,
                cancellationToken);

            var reply = MessageFactory.Text(this.localizer.GetString("PermissionDeclinedText"));
            reply.TextFormat = "xml";
            await turnContext.SendActivityAsync(reply, cancellationToken);
        }

        private async Task UpdateServiceUrl(string serviceUrl)
        {
            // Check if service url is already synced.
            var cachedUrl = await this.appSettingsService.GetServiceUrlAsync();
            if (!string.IsNullOrWhiteSpace(cachedUrl))
            {
                return;
            }

            // Update service url.
            await this.appSettingsService.SetServiceUrlAsync(serviceUrl);
        }
    }
}

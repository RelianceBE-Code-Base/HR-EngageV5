import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import './utilities.css';
import topImage from './Messages Overview.jpeg';
import newRequest from './New Message.jpeg';
//import TrackerRequest from './Schedule.jpeg';
import userConfig from './Configure Audience.jpeg';
import viewMessage from './viewMessage.jpeg';
import viewChannel from './viewChannel.jpeg';
import viewChat from './viewChat.jpeg';

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                {/* Navbar */}
                <div className="navbar">
                    <div className="container flex">
                        <h1 className="logo">HR Engage</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/privacy">Privacy</Link></li>
                                <li><Link to="/termsofuse">Terms of Use</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Showcase */}
                <section className="showcase">
                    <div className="container grid">

                        <div className="showcase-text">
                            <h1>Revolutionizing</h1>
                            <h1>Your Organization's</h1>
                            <h1>HR Engage.</h1>
                            <p>As organizations evolve and grow, managing employees engagement and communication can become a complex process. Our HR Engage is a comprehensive solution for enhancing employee engagement within organizations. By leveraging the familiar Teams interface, ‘HR Engage’ enables employees to access important company information, such as announcements, birthday updates, anniversaries, company events, newsletters, and more. This application facilitates efficient and effective employee engagement, allowing broadcasting of messages to multiple teams and individuals through channel posts and chat messages, Scheduling of messages and more.</p>
                            <p>Built for Microsoft Teams.</p>
                            //<a href="/" className="btn-btn btn-primary">Check on AppSource</a>
                        </div>

                        <div className="showcase-image-container">
                            <div className="top-image"><img src={topImage} alt="" /></div>
                        </div>

                    </div>
                </section>

                {/* App features */}
                <section className="app-features">
                    <div className="section-header">
                        <h1>Overview</h1>
                    </div>

                    <div className="app-features">
                        <div className="grid container">
                            <div>
                                <h2>Overview of the HR Engage Admin page</h2>
                                <p>Admin can see drafted messages, scheduled and, sent messages in one view .</p>
                            </div>
                            <div><img src={topImage} alt="" /></div>
                        </div>
                    </div>

                    <div className="app-features app-features-light-section">
                        <div className="grid container">
                            <div><img src={newRequest} alt="" /></div>
                            <div>
                                <h2>Send Message</h2>
                                <p>Enter message information, upload image and add call to action button.</p>
                            </div>
                        </div>
                    </div>

                    <div className="app-features">
                        <div className="grid container">
                            <div>
                                <h2>Configure Message Audience</h2>
                                <p>Pick from four options to target audience. Send to general channel of selected teams, send in 1:1 chat to members of selected teams, send to all users who have the app installed or send to M365 groups, CSV file, distribution lists or security groups.</p>
                            </div>
                            <div><img src={userConfig} alt="" /></div>
                        </div>
                    </div>

                    <div className="app-features app-features-light-section">
                        <div className="grid container">
                            <div><img src={viewMessage} alt="" /></div>
                            <div>
                                <h2>View Details of a Particular Message</h2>
                                <p>Administrators have a comprehensive overview of a message sent.</p>
                            </div>
                        </div>
                    </div>

                    <div className="app-features">
                        <div className="grid container">
                            <div>
                                <h2>Broadcast Posted on Teams Channel</h2>
                                <p>Users get HR Engage messages in a Teams Channel as they drops.</p>
                            </div>
                            <div><img src={viewChannel} alt="" /></div>
                        </div>
                    </div>

                    <div className="app-features app-features-light-section">
                        <div className="grid container">
                            <div><img src={viewChat} alt="" /></div>
                            <div>
                                <h2>User Gets Broadcast as a Chat</h2>
                                <p>Users get HR Engage messages as chat as they drops.</p>
                            </div>
                        </div>
                    </div>

                    {/* The conclusion*/}
                    <section className="conclusion" id="the-make-up">
                        <div>
                            <h1>The HR Engage</h1>
                            <h1>helps you streamline and enhance employee engagement</h1>
                            <h1>by providing a convenient platform that consolidates various communication channels and engagement activities.</h1>
                            <a href="/" className="btn-btn btn-primary">Check on AppSource</a>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="footer">
                        <div>
                            <p><Link to="/privacy">Privacy Policy</Link></p>
                            <p><Link to="/termsofuse">Terms of Use</Link></p>
                            <p>&copy; Reliance Infosystems</p>
                        </div>
                    </footer>

                </section>
            </div>
        )
    }

}

export default Home;

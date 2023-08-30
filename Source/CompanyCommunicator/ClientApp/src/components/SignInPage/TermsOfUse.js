// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import './utilities.css'; 


/**
 * This component is used to display the required
 * terms of use statement which can be found in a
 * link in the about tab.
 */
class TermsOfUse extends React.Component {
  render() {
    return (
      <div className='terms-of-use'>
        {/* Navbar */}
        <div class="navbar">
          <div class="container flex">
            <h1 class="logo">Expense Claim</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/termsofuse">Terms of Use</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Privacy */}
        <section class="terms-of-use-text">
          <div class="container">
            <h1>Terms of Use</h1>



            <p>Last updated: July 1, 2023</p>



            <p>Welcome to the Expense Claim Application by Reliance Infosystems Limited ("Company", "we", "us", or "our"). The following Terms of Use govern your use of our application and any services offered in association with it. By accessing, viewing, or using the content, material, products, or services available on or through the Application, you certify that you have read, understand, and agree to be legally bound by these Terms, as well as our Privacy Policy, incorporated herein by reference.</p>



            <p>If you do not agree to these terms, please refrain from using the Application.</p>



            <h2>Definitions</h2>



            <p>In these Terms of Use, the term "Application" refers to the Expense Claim Application owned and operated by Reliance Infosystems Limited, its agents, affiliates, and/or licensors.</p>



            <h2>Access to the Application</h2>



            <p>We grant you a non-transferable, non-exclusive, revocable, limited license to use and access the Application exclusively for your personal and non-commercial use. The Application or any portion of the Application may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent from us.</p>



            <h2>Usage Restrictions</h2>



            <p>The rights granted to you are subject to certain restrictions. Specifically, you agree that you will not:</p>

            <ol type="a">

              <li>license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Application;</li>

              <li>modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the Application;</li>

              <li>access the Application in order to build a similar or competitive Application;</li>

              <li>copy, reproduce, distribute, republish, download, display, post, or transmit the Application in any form or by any means, except as otherwise permitted in these Terms.</li>

            </ol>



            <h2>Intellectual Property Rights</h2>



            <p>Except for the limited license granted to you, we, and our licensors, if any, retain all right, title, and interest in and to the Application and all related intellectual property rights. The Application is protected by copyright, trademark, and other laws of both the Federal Republic of Nigeria and foreign countries.</p>



            <h2>Limitation of Liability</h2>



            <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Application.</p>



            <h2>Copyright Policy</h2>



            <p>We respect the intellectual property rights of others, and we expect users of our application to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law.</p>



            <h2>Links to Third Party Websites</h2>



            <p>The Application may contain links to third-party websites. These links are provided for your convenience only. We have no control over third-party websites, and we are not responsible for the content of such websites or the privacy practices of those third-party websites.</p>



            <h2>Amendments</h2>



            <p>We reserve the right to amend or revise these Terms at any time by posting an updated version. Your continued use of the Application following the posting of any changes to these Terms constitutes acceptance of those changes.</p>



            <h2>Contact Us</h2>



            <p>For any inquiries or questions regarding our Terms of Use, please contact us at be@relianceinfosystems.com</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div>
            <p><Link to="/privacy">Privacy Policy</Link></p>
            <p><Link to="/termsofuse">Terms of Use</Link></p>
            <p>&copy; Reliance Infosystems Limited</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default TermsOfUse;

import React from "react";
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/utilities.css';
import topImage from './images/top-Image.png';
import newRequest from './images/newForm.png';
import TrackerRequest from './images/trackerRequest.png';
import userConfig from './images/Approval-Action.png';
import approval from './images/Approval-Action.png';
import allRequests from './images/allRequest.png';
import statsAdmin from './images/overview.png';

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                {/* Navbar */}
                <div className="navbar">
                    <div className="container flex">
                        <h1 className="logo">Expense Claim</h1>
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
                            <h1>Expense Claim Management.</h1>
                            <p>As organizations evolve and grow, managing expense claims can become a complex process. Our intuitive application simplifies the submission, tracking, and approval of expense requests, providing a seamless experience for employees and administrators.</p>
                            <p>Built for Microsoft Teams, Office 365, and Outlook.</p>
                            <a href="/" className="btn-btn btn-primary">Check on AppSource</a>
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
                                <h2>Submitting of Request with Line Items</h2>
                                <p>Employees can easily submit expense requests along with detailed line items, providing clarity and accuracy in expense reporting.</p>
                            </div>
                            <div><img src={newRequest} alt="" /></div>
                        </div>
                    </div>

                    <div className="app-features app-features-light-section">
                        <div className="grid container">
                            <div><img src={TrackerRequest} alt="" /></div>
                            <div>
                                <h2>View and Track Personal Previous Requests</h2>
                                <p>Employees can view and track their previous expense requests, enabling them to monitor their spending and track reimbursement status.</p>
                            </div>
                        </div>
                    </div>

                    <div className="app-features">
                        <div className="grid container">
                            <div>
                                <h2>View All Requests Raised by All Users</h2>
                                <p>Administrators can access a centralized view of all expense requests raised by employees, allowing for better visibility and control over expenses.</p>
                            </div>
                            <div><img src={allRequests} alt="" /></div>
                        </div>
                    </div>

                    <div className="app-features app-features-light-section">
                        <div className="grid container">
                            <div><img src={userConfig} alt="" /></div>
                            <div>
                                <h2>All Approval View and Action of Requests</h2>
                                <p>Administrators have a comprehensive overview of all expense requests, allowing them to review, approve, or reject requests efficiently.</p>
                            </div>
                        </div>
                    </div>

                    <div className="app-features">
                        <div className="grid container">
                            <div>
                                <h2>Configuration (Currency, Category, and Approval Personnel)</h2>
                                <p>Administrators can configure expense-related settings such as currency options, expense categories, and approval personnel, tailoring the application to the organization's needs.</p>
                            </div>
                            <div><img src={approval} alt="" /></div>
                        </div>
                    </div>

                    <div className="app-features app-features-light-section">
                        <div className="grid container">
                            <div><img src={statsAdmin} alt="" /></div>
                            <div>
                                <h2>User Expense Summary Overview Monthly</h2>
                                <p>Users and administrators can access a summary overview of monthly expenses, allowing for better budgeting and financial analysis.</p>
                            </div>
                        </div>
                    </div>

                    {/* The conclusion*/}
                    <section className="conclusion" id="the-make-up">
                        <div>
                            <h1>The Expense Claim App</h1>
                            <h1>helps you streamline</h1>
                            <h1>your organization's expense claim process.</h1>
                            <a href="/" className="btn-btn btn-primary">Check on AppSource</a>
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

                </section>
            </div>
        )
    }

}

export default Home;
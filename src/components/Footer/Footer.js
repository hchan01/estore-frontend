import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { PaymentMethods, SocialMedia } from '..';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <nav className="nav flex-column">
                        <h4>Company</h4>
                        <NavLink to="/about-us" className="nav-link pl-0">About Us</NavLink>
                        <NavLink to="/contact-us" className="nav-link pl-0">Contact Us</NavLink>
                        <NavLink to="/find-store" className="nav-link pl-0">Find a store</NavLink>
                        <NavLink to="/careers" className="nav-link pl-0">Careers</NavLink>
                        <NavLink to="/blog" className="nav-link pl-0">Blog</NavLink>
                    </nav>
                </div>
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <nav className="nav flex-column">
                        <h4>Information</h4>
                        <NavLink to="/faq" className="nav-link pl-0">FAQ</NavLink>
                        <NavLink to="/help/delivery" className="nav-link pl-0">Delivery & Collection</NavLink>
                        <NavLink to="/help/returns" className="nav-link pl-0">Returns & Cancellations</NavLink>
                    </nav>
                </div>
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <nav className="nav flex-column">
                        <h4>Legal</h4>
                        <NavLink to="/privacy-policy" className="nav-link pl-0">Privacy Policy</NavLink>
                        <NavLink to="/terms-and-conditions" className="nav-link pl-0">Terms and Conditions</NavLink>
                    </nav>
                </div>
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <h4>Follow</h4>
                    <SocialMedia />
                </div>
            </div>
            <div className="row mt-5 pt-2 border-top no-gutters">
                <div className="col-sm-4">
                    <span className="copyright">&#169; FusionTech 2020</span>
                </div>
                <div className="col-sm-8 text-left text-sm-right mt-3 mt-sm-0">
                    <PaymentMethods />
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { PaymentMethodsBlock, SocialButtonsBlock } from '..';

export const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <Nav className="flex-column">
                        <h4 className="footer__heading">Company</h4>
                        <Nav.Link as={NavLink} to="/about-us" className="footer__nav-link pl-0">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact-us" className="footer__nav-link pl-0">Contact Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/find-store" className="footer__nav-link pl-0">Find a store</Nav.Link>
                        <Nav.Link as={NavLink} to="/careers" className="footer__nav-link pl-0">Careers</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" className="footer__nav-link pl-0">Blog</Nav.Link>
                    </Nav>
                </div>
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <Nav className="flex-column">
                        <h4 className="footer__heading">Information</h4>
                        <Nav.Link as={NavLink} to="/faq" className="footer__nav-link pl-0">FAQ</Nav.Link>
                        <Nav.Link as={NavLink} to="/help/delivery" className="footer__nav-link pl-0">Delivery & Collection</Nav.Link>
                        <Nav.Link as={NavLink} to="/help/returns" className="footer__nav-link pl-0">Returns & Cancellations</Nav.Link>
                    </Nav>
                </div>
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <Nav className="flex-column">
                        <h4 className="footer__heading">Legal</h4>
                        <Nav.Link as={NavLink} to="/privacy-policy" className="footer__nav-link pl-0">Privacy Policy</Nav.Link>
                        <Nav.Link as={NavLink} to="/terms-and-conditions" className="footer__nav-link pl-0">Terms and Conditions</Nav.Link>
                    </Nav>
                </div>
                <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
                    <h4 className="footer__heading">Follow</h4>
                    <SocialButtonsBlock />
                </div>
            </div>
            <div className="row mt-5 pt-2 border-top no-gutters">
                <div className="col-sm-4">
                    <span className="footer__copyright">&#169; FusionTech 2020</span>
                </div>
                <div className="col-sm-8 text-left text-sm-right mt-3 mt-sm-0">
                    <PaymentMethodsBlock />
                </div>
            </div>
        </div>
    </footer>
)
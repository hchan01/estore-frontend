import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

const CheckoutBreadcrumb = (props) => (
    <ul className="checkout-breadcrumb">
        <li className={`checkout-breadcrumb__step ${props.step1 ? 'checkout-breadcrumb__step--active' : ''}`}><NavLink to={`/cart`}>Cart</NavLink></li>
        <li className={`checkout-breadcrumb__step ${props.step2 ? 'checkout-breadcrumb__step--active' : ''}`}><NavLink to={`/checkout/delivery`}>Delivery</NavLink></li>
        <li className={`checkout-breadcrumb__step ${props.step3 ? 'checkout-breadcrumb__step--active' : ''}`}><NavLink to={`/checkout/payment`}>Payment</NavLink></li>
        <li className={`checkout-breadcrumb__step ${props.step4 ? 'checkout-breadcrumb__step--active' : ''}`}>Order Confirmation</li>
    </ul>
)

export default CheckoutBreadcrumb;
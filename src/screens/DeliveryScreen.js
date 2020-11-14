import React from 'react';
import { CheckoutBreadcrumb } from '../components';
import { NavLink } from 'react-router-dom';

const DeliveryScreen = () => (
    <div className="container">
        <div className="row">
            <CheckoutBreadcrumb step1 step2 />
        </div>

        <h1>Delivery</h1>
        <NavLink to={`/checkout/payment`}>Pay now</NavLink>
    </div>
)

export default DeliveryScreen
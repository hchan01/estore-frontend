import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartTable, CheckoutBreadcrumb } from '../components';

const CartScreen = () => (
    <div className="container">
        <div className="row">
            <CheckoutBreadcrumb step1 />
        </div>

        <h2>Your basket</h2>

        <CartTable />

        <NavLink to={`/checkout/delivery`}>Proceed to checkout</NavLink>
    </div>
)

export default CartScreen;
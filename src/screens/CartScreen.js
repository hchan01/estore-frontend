import React from 'react';
import { CartTable, CheckoutBreadcrumb } from '../components';

const CartScreen = () => (
    <div className="container">
        <div className="row">
            <CheckoutBreadcrumb step1 />
        </div>

        <h2>Your basket</h2>

        <CartTable />
    </div>
)

export default CartScreen;
import React from 'react';
import { CartTable, CheckoutBreadcrumb } from '../../components';

export const CartScreen = () => (
    <div className="container">
        <div className="row">
            <CheckoutBreadcrumb step1 />
        </div>

        <h2>Your basket</h2>

        <CartTable />
    </div>
)
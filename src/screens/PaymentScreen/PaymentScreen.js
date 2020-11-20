import React from 'react';
import { CheckoutBreadcrumb, PayPalButton } from '../../components';

export const PaymentScreen = (props) => (
    <div className="container">
        <div className="row">
            <CheckoutBreadcrumb step1 step2 step3 />
        </div>
        <PayPalButton onSuccess={e => { props.history.push('/checkout/order/1'); }} />
    </div>
)
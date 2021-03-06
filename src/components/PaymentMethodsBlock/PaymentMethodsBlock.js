import React from 'react';
import './PaymentMethodsBlock.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcPaypal, faCcApplePay } from '@fortawesome/free-brands-svg-icons';

export const PaymentMethodsBlock = () => (
    <div className="payment-methods">
        <FontAwesomeIcon icon={faCcVisa} size="2x" color="#212529" inverse className="payment-methods__icon" />
        <FontAwesomeIcon icon={faCcMastercard} size="2x" color="#212529" inverse className="payment-methods__icon" />
        <FontAwesomeIcon icon={faCcAmex} size="2x" color="#212529" inverse className="payment-methods__icon" />
        <FontAwesomeIcon icon={faCcPaypal} size="2x" color="#212529" inverse className="payment-methods__icon" />
        <FontAwesomeIcon icon={faCcApplePay} size="2x" color="#212529" inverse className="payment-methods__icon" />
    </div>
)
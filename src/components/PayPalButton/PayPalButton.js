import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const CLIENT_ID = 'AVogwHUZXjOrYP9klBbaICZsfG7ZnjIc3lcxRA6yF8sXf_UiBIYiNfH1BcRnZCwuz44ES_MrFxr-n0RO';

export const PayPalButton = (props) => {
    const [sdkReady, setSdkReady] = useState(false);

    const addPaypalSdk = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.paypal.com/sdk/js?currency=GBP&client-id=' + CLIENT_ID;
        script.async = true;
        script.onload = () => {
            setSdkReady(true);
        }
        document.body.appendChild(script);
    }

    const createOrder = (data, actions) => actions.order.create({
        purchase_units: [
            {
                amount: {
                    currency_code: 'GBP',
                    value: 1
                }
            }
        ]
      });

    const onApprove = (data, actions) => actions.order
        .capture()
        .then(details => {
            console.log('payment', data, details);
            props.onSuccess();
        })
        .catch(err => console.log(err));

    useEffect(() => {
        if (!window.paypal) {
            addPaypalSdk();
        }
        return () => {
            //
        };
    }, []);

    if (!sdkReady) {
        return <div>Loading...</div>
    }

    const Button = window.paypal.Buttons.driver('react', { React, ReactDOM });

    return <Button {...props} createOrder={(data, actions) => createOrder(data, actions)} onApprove={(data, actions) => onApprove(data, actions)} />
}
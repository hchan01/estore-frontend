import React, { useState, useEffect } from 'react';
import { CheckoutBreadcrumb } from '../../components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const OrderScreen = () => {
    let { orderId } = useParams();

    const [order, setOrder] = useState({
        id: '',
        totalPrice: 0,
        lineItems: []
    });

    useEffect(() => {
        async function fetchData() {
            let response = await axios.post(process.env.REACT_APP_API_URL, {
                query: `
                    {
                        order(orderId: ${orderId}) {
                            id
                            totalPrice
                            lineItems {
                                productId
                                quantity
                                unitPrice
                                totalPrice
                            }
                        }
                    }
                `
            });

            setOrder(response.data.data.order);
        }

        fetchData();
    }, [orderId]);

    return (
        <div className="container">
            <div className="row">
                <CheckoutBreadcrumb step1 step2 step3 step4 />
            </div>

            Thank you for your order
            <h2>{order.id} {order.totalPrice}</h2>
            {
                order.lineItems.map(item => (
                    <div>
                        {item.productId} {item.quantity} {item.unitPrice} {item.totalPrice}
                    </div>
                ))
            }
        </div>
    )
}
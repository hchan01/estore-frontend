import React, { useState, useEffect } from 'react';
import './CartTable.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ProductLink } from '..';

export const CartTable = () => {
    const [items, setCart] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await axios.post(process.env.REACT_APP_API_URL, {
                query: `
                    {
                        cart( where:{ id: 1 } ) {
                            cartLineItem {
                                id
                                quantity
                                product {
                                    id
                                    name
                                    unitPrice
                                    image
                                    slug
                                }
                            }
                        }
                    }
                `
            });
            setCart(response.data.data.cart.cartLineItem);
        }

        fetchData();
    }, []);

    return (
        <div className="container cart">
            <div className="row">
                <div className="col-md-9">
                    {
                        items.map(item => 
                            <div className="cart__item" key={item.product.id}>
                                <div className="cart__column cart__image-box">
                                    <img src={item.product.image} className="cart__image" alt={item.product.name} />
                                </div>
                                <div className="cart__column">
                                    <ProductLink product={item.product}>{item.product.name}</ProductLink>
                                    {item.quantity}
                                </div>
                                <div className="cart__column">
                                    &#163;{item.totalPrice}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-md-3">
                    <NavLink to={`/checkout/delivery`}>Proceed to checkout</NavLink>
                </div>
            </div>
        </div>
    )
}
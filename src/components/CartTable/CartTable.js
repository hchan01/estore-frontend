import React from 'react';
import './CartTable.scss';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { ProductLink } from '..';
import { CART_FETCH } from './queries';

export const CartTable = () => {
    const { data } = useQuery(CART_FETCH, {
        variables: { cartId: 1 },
        fetchPolicy: 'network-only'
    });

    return (
        <div className="container cart">
            <div className="row">
                <div className="col-md-9">
                    {
                        data && data.cart.cartLineItem.map(item => 
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
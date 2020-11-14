import React, { useState, useEffect } from 'react';
import './styles.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ProductLink } from '../ProductLink';

const CartTable = () => {
    const [items, setCart] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await axios.post(process.env.REACT_APP_API_URL, {
                query: `
                    {
                        cart {
                            id
                            name
                            quantity
                            unitPrice
                            image
                            slug
                            totalPrice
                        }
                    }
                `
            });
            setCart(response.data.data.cart);
        }

        fetchData();
    }, []);

    return (
        <div className="cart">
            {
                items.map(item => 
                    <div className="cart__item" key={item.id}>
                        <div className="cart__column cart__image-box">
                            <img src={item.image} className="cart__image" alt={item.name} />
                        </div>
                        <div className="cart__column">
                            <ProductLink product={item}>{item.name}</ProductLink>
                            {item.quantity}
                        </div>
                        <div className="cart__column">
                        &#163;{item.totalPrice}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CartTable;
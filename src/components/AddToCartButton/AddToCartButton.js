import React from 'react';
import './AddToCartButton.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';

export const AddToCartButton = ({ productId, quantity }) => {
    const dispatch = useDispatch();
    
    return (
        <button className="add-to-cart" onClick={e => dispatch(addToCart(productId, quantity)) }>Add to Cart</button>
    )
}
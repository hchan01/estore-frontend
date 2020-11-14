import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';

const AddToCartButton = ({ productId, quantity }) => {
    const dispatch = useDispatch();
    
    return (
        <button className="add-to-cart" onClick={e => dispatch(addToCart(productId, quantity)) }>Add to Cart</button>
    )
}

export default AddToCartButton;
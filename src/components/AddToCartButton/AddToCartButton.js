import React from 'react';
import './AddToCartButton.scss';
import { useMutation } from '@apollo/client';
import { CART_ADD_ITEM } from './queries';

export const AddToCartButton = ({ productId, quantity }) => {
    const [addToCart] = useMutation(CART_ADD_ITEM);
    
    return (
        <button className="add-to-cart" onClick={async () => await addToCart({ variables: { productId, quantity } })}>Add to Cart</button>
    )
}
import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProductLink = ({ children, product }) => (
    <NavLink to={{
        pathname: `/products/${product.slug}`,
        state: {
            productId: product.id
        }
    }}>
        { children }
    </NavLink>
)
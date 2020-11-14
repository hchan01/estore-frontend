import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductLink = ({ children, product }) => (
    <NavLink to={{
        pathname: `/products/${product.slug}`,
        state: {
            productId: product.id
        }
    }}>
        { children }
    </NavLink>
)

export default ProductLink;
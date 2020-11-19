import React from 'react';
import './styles.scss';
import { AddToCartButton } from '../../AddToCartButton';
import { ProductLink } from '../../ProductLink';

const ProductCard = ({product}) => {
    return (
        <div className="col-md-3">
            <div className="product-card">
                <div className="product-card__image-box">
                    <ProductLink product={product}>
                        <img src={product.image} className="product-card__image" alt={product.name} />
                    </ProductLink>
                </div>
                <div className="product-card__details-box">
                    <ProductLink product={product}>
                        <h3 className="product-card__name">{product.name}</h3>
                        <span className="product-card__price">&#163;{product.unitPrice}</span>
                    </ProductLink>

                    <AddToCartButton productId={product.id} quantity={1} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
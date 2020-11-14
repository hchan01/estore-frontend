import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductList } from '../components';

const ProductListingScreen = () => {
    let { categoryId } = useParams();

    return (
        <div className="container-fluid">
            <div className="row">
                <ProductList filters={{ categoryId }} />
            </div>
        </div>
    )
}

export default ProductListingScreen;
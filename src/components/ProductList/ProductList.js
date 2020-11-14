import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { CubeSpinner } from 'react-spinners-kit';
import { FilterPanel } from './FilterPanel';
import { getProducts, filterSetMax } from './actions';

const ProductList = ({ filters }) => {
    const isLoading = useSelector(state => state.productList.loading);
    const brands = useSelector(state => state.productList.products.map(product => product.brand));
    const max = useSelector(state => {
        const products = state.productList.products;
        if (products.length == 0) {
            return 0;
        }
        else {
            return Math.max(...products.map(product => product.unitPrice));
        }
    });

    const filterMax = useSelector(state => state.productListFilter.maxPrice);

    const products = useSelector(state => {
        let products = [...state.productList.products];
        if (brands.length > 0) {
            products = products.filter(product => brands.includes(product.brand));
        }
        products = products.filter(product => product.unitPrice <= filterMax);
        return products;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(filters.categoryId));
        dispatch(filterSetMax(max));
    }, [filters.categoryId]);

    return (
            isLoading
                ?
                <div className="spinner">
                    <CubeSpinner size={40} frontColor="#f2b25e" loading={isLoading} />
                </div>
                :
                <React.Fragment>
                    <div className="col-md-3">
                        <FilterPanel brands={brands} max={max} />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                        {
                            products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                        </div>
                    </div>
                </React.Fragment>
    )
}

export default ProductList;
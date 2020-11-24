import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard, FilterPanel } from '../../components';

import { useQuery } from '@apollo/client';
import { PRODUCT_LIST_FETCH } from './queries';

export const ProductListingScreen = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [original, setOriginal] = useState([]);
    const [max, setMax] = useState([]);
    const [currentMin, setCurrentMin] = useState(0);
    const [currentMax, setCurrentMax] = useState(0);
    const [sortOrder, setSortOrder] = useState(null);
    const filters = [{
        key: 'brand'
    }];
    const [loaded, setLoaded] = useState(false);

    const { data } = useQuery(PRODUCT_LIST_FETCH, {
        variables: { categoryId: +categoryId },
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            setProducts(data.products);
            setOriginal(data.products);
            const max = Math.max(...data.products.map(product => product.unitPrice));
            setMax(max);
            setCurrentMax(max);
            setLoaded(true);
        }
    });

    const brandsList = original.map(product => {
        return {
            brand: product.brand
        }
    })

    const [brands, setBrands] = useState([]);

    

    

    useEffect(() => {
        let filtered = [...original];

        if (brands.length > 0) {
            filtered = filtered.filter(product =>
                brands.some(brand => product.brand == brand)
            );
        }

        filtered = filtered.filter(product =>
            product.unitPrice >= currentMin && product.unitPrice <= currentMax    
        );

        filtered.sort((a, b) => {
            switch(sortOrder) {
                case 'LOW_TO_HIGH':
                    return a.unitPrice - b.unitPrice;
                case 'HIGH_TO_LOW':
                    return b.unitPrice - a.unitPrice;
                default:
                    return 0;
            }
        })

        setProducts(filtered);
      }, [brands, currentMin, currentMax, sortOrder]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    {
                        loaded && <FilterPanel
                            // onFilter={handleFilter}
                            products={products}
                            filters={filters}
                            brandsList={brandsList}
                            brands={brands}
                            setBrands={setBrands}
                            max={max}
                            setMax={setMax}
                            setCurrentMax={setCurrentMax}
                            setCurrentMin={setCurrentMin}
                            setSortOrder={setSortOrder}
                        />
                    }
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {
                            products.map(product =>
                                <ProductCard product={product} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import { AddToCartButton } from '../components';

const ProductScreen = (props) => {
    let productId = props.location.state.productId;

    const [product, setProduct] = useState({ images: [] });

    useEffect(() => {
        async function fetchData() {
            let response = await axios.post(process.env.REACT_APP_API_URL, {
                query: `
                    {
                        product(productId: ${productId}) {
                            id
                            name
                            unitPrice
                            image
                        }
                    }
                `
            });

            let product = {
                ...response.data.data.product,
                images: [
                    {
                        original: response.data.data.product.image,
                        thumbnail: response.data.data.product.image,
                    },
                    {
                        original: response.data.data.product.image,
                        thumbnail: response.data.data.product.image,
                    },
                    {
                        original: response.data.data.product.image,
                        thumbnail: response.data.data.product.image,
                    }
                ]
            }

            setProduct(product);
        }

        fetchData();
    }, [productId]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <ImageGallery
                        items={product.images}
                        infinite={false}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </div>
                <div className="col-md-9">
                    <h2>{product.name} {product.unit_price}</h2>
                    <AddToCartButton productId={product.id} quantity={1} />
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;
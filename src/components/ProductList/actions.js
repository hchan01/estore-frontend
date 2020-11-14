import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_FILTER_MAX } from './types';
import axios from 'axios';

export const getProducts = (categoryId) => async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    try {
        const { data } = await axios.post(process.env.REACT_APP_API_URL, {
            query: `
                {
                    products(categoryId: ${categoryId}) {
                        id
                        name
                        brand
                        unitPrice
                        image
                        slug
                        categoryId
                    }
                }
            `
        });

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.data.products });
    } catch(error) {
        dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
    }
}

export const filterSetMax = (maxPrice) => (dispatch) => {
    dispatch({ type: PRODUCT_LIST_FILTER_MAX, payload: maxPrice });
};
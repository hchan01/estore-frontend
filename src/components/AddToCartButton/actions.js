import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from './types';
import axios from 'axios';

export const addToCart = (productId, quantity) => async (dispatch) => {
    let response = await axios.post(process.env.REACT_APP_API_URL, {
        query: `
            mutation {
                addToCart(productId: ${productId}, quantity: ${quantity}) {
                    id
                    cartLineItem {
                        product {
                            id
                            name
                            unitPrice
                        }
                    }
                }
            }
        `
    });
    dispatch({
        type: CART_ADD_ITEM
    });
}
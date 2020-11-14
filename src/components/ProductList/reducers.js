import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_LIST_FILTER_MAX
} from './types';  
    
const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };
        case PRODUCT_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

const productListFilterReducer = (state = { minPrice: 0, maxPrice: 0 }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_FILTER_MAX:
            return {
                maxPrice: action.payload
            };
        default:
            return state;
    }
}
  
export {
    productListReducer,
    productListFilterReducer
}
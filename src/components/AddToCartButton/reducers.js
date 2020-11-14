import { CART_ADD_ITEM } from './types';  
    
const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return {
                ...state
            };
        default:
            return state;
    }
};
  
export {
    cartReducer
}
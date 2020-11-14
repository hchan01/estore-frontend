import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../components/SignInForm/reducers';
import { productListReducer, productListFilterReducer } from '../components/ProductList/reducers';
import { cartReducer } from '../components/AddToCartButton/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    productList: productListReducer,
    productListFilter: productListFilterReducer,
    cart: cartReducer
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
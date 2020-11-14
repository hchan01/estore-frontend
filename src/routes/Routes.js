import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ScrollToTop } from '../components';
import {
    HomeScreen,
    SignInScreen,
    RegisterScreen,
    ProductListingScreen,
    ProductScreen,
    CartScreen,
    DeliveryScreen,
    PaymentScreen,
    OrderScreen,
    PrivacyPolicyScreen,
    TermsAndConditionsScreen,
    PageNotFoundScreen
} from '../screens';

const Routes = () => (
    <ScrollToTop>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/sign-in" component={SignInScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/category/:categoryId" component={ProductListingScreen} />
            <Route exact path="/products/:productId" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
            <Route exact path="/checkout/delivery" component={DeliveryScreen} />
            <Route exact path="/checkout/payment" component={PaymentScreen} />
            <Route exact path="/checkout/order/:orderId" component={OrderScreen} />
            <Route exact path="/privacy-policy" component={PrivacyPolicyScreen} />
            <Route exact path="/terms-and-conditions" component={TermsAndConditionsScreen} />
            <Route component={PageNotFoundScreen} status={404} />
        </Switch>
    </ScrollToTop>
)

export default Routes;
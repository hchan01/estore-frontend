import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ScrollToTop } from '../components';
import {
    HomeScreen,
    SignInScreen,
    RegisterScreen,
    AccountScreen,
    ProductListingScreen,
    ProductScreen,
    CartScreen,
    DeliveryScreen,
    PaymentScreen,
    OrderScreen,
    PrivacyPolicyScreen,
    TermsAndConditionsScreen,
    PageNotFoundScreen,
    UserDetailsScreen,
    UserAddressBookScreen,
    UserOrdersScreen
} from '../screens';

export const Routes = () => (
    <main className="pt-5">
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/sign-in" component={SignInScreen} />
                <Route exact path="/register" component={RegisterScreen} />
                <Route exact path="/account" component={AccountScreen} />
                <Route exact path="/account/details" component={UserDetailsScreen} />
                <Route exact path="/account/address-book" component={UserAddressBookScreen} />
                <Route exact path="/account/orders" component={UserOrdersScreen} />
                <Route exact path="/category/:categoryId" render={(props) => 
                    <ProductListingScreen key={props.match.params.categoryId} {...props} />
                } />
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
    </main>
)
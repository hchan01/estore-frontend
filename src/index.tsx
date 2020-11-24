import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { cache } from './cache';
import { IS_LOGGED_IN } from './queries';

const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache
});

cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
        isLoggedIn: !!localStorage.getItem('isLoggedIn')
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

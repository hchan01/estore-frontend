import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFoundScreen = () => {
    return (
        <div className="container text-center">
            <h1>404</h1>
            <h4>Oops! Page not found</h4>
            <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
            <NavLink to="/">Back to home</NavLink>
        </div>
    )
}

export default PageNotFoundScreen;
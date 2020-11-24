import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SearchBar } from '..';
import logo from '../../assets/images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../../queries';

export const Header = () => {
    const { data } = useQuery(IS_LOGGED_IN);

    return (
        <header className="header">
            <Navbar expand="lg" variant="dark" className="header__navbar">
                <Navbar.Brand as={NavLink} exact to={'/'}><img src={logo} className="header__logo" alt="FusionTech" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto pl-0 pl-sm-4">
                        <Nav.Link as={NavLink} exact to="/category/1" className="header__nav-link" activeClassName="active">Headphones</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/category/2" className="header__nav-link" activeClassName="active">Gaming Consoles</Nav.Link>
                    </Nav>
                    <Nav>
                        <SearchBar />
                        {
                            data.isLoggedIn
                            ?
                            <Nav.Link as={NavLink} exact to={ { pathname: '/account', state: { prevPath: window.location.pathname } } } className="pl-0 pl-sm-4 header__nav-link" activeClassName="active">
                                <FontAwesomeIcon icon={faUser} /> Account
                            </Nav.Link>
                            :
                            <Nav.Link as={NavLink} exact to={ { pathname: '/sign-in', state: { prevPath: window.location.pathname } } } className="pl-0 pl-sm-4 header__nav-link" activeClassName="active">
                                <FontAwesomeIcon icon={faUser} /> Sign In
                            </Nav.Link>
                        }
                        <Nav.Link as={NavLink} exact to="/cart" className="nav-item nav-link header__nav-link" activeClassName="active">
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
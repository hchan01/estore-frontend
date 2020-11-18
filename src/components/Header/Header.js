import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SearchBar } from '..';
import logo from '../../assets/images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
                            isLoggedIn
                            ?
                            <Nav.Link as={NavLink} exact to={ { pathname: '/account', state: { prevPath: window.location.pathname } } } className="pl-0 pl-sm-4" className="header__nav-link" activeClassName="active">
                                <FontAwesomeIcon icon={faUser} />
                            </Nav.Link>
                            :
                            <Nav.Link as={NavLink} exact to={ { pathname: '/sign-in', state: { prevPath: window.location.pathname } } } className="pl-0 pl-sm-4" className="header__nav-link" activeClassName="active">
                                <FontAwesomeIcon icon={faUser} /> Account
                            </Nav.Link>
                        }
                        <Nav.Link as={NavLink} exact to="/cart" className="nav-item nav-link" className="header__nav-link" activeClassName="active">
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
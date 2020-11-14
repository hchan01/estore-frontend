import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Console, Header, Footer } from './components';
import { Routes } from './routes';
import CookieConsent from 'react-cookie-consent';
import { NavLink } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Console />
            <div className="search-bar__overlay"></div>
            <Header />
            <Routes />
            <Footer />
            <CookieConsent
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                buttonStyle={{ backgroundColor: 'rgb(0, 87, 168)', color: '#FFFFFF', borderRadius: '30px', fontWeight: 'bold', paddingLeft: '32px', paddingRight: '32px' }}
                buttonText="Accept"
            >
                We use cookies to provide a better customer experience on our site. By continuing to shop with us, you consent to our use of cookies. <NavLink to="/privacy-policy">Learn more</NavLink>
            </CookieConsent>
        </BrowserRouter>
    );
}

export default App;
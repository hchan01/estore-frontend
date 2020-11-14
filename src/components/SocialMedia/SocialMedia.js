import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const PaymentMethods = () => (
    <div className="social-media">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5999" className="social-media__icon" /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" color="#55acee" className="social-media__icon" /></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" color="#e4405f" className="social-media__icon" /></a>
        <a href="https://www.pinterest.co.uk/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPinterest} size="2x" color="#bd081c" className="social-media__icon" /></a>
    </div>
)

export default PaymentMethods;
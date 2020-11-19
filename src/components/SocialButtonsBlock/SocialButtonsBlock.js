import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const SocialButtonsBlock = () => (
    <div className="social-buttons">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-buttons__button">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#3B5999" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-buttons__button">
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#55ACEE" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-buttons__button">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
        </a>
        <a href="https://www.pinterest.co.uk/" target="_blank" rel="noreferrer" className="social-buttons__button">
            <FontAwesomeIcon icon={faPinterest} size="2x" color="#BD081C" />
        </a>
    </div>
)

export default SocialButtonsBlock;
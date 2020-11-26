import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faBox } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export const AccountScreen = () => (
    <div className="container">
        <CardDeck>
            <Card className="text-center" border="secondary">
                <NavLink to="/account/details">
                    <Card.Body className="p-5">
                        <FontAwesomeIcon icon={faUser} size="5x" color="#6c757d" />
                        <div className="mt-4">My Details</div>
                    </Card.Body>
                </NavLink>
            </Card>
           
            <Card className="text-center" border="secondary">
                <NavLink to="/account/address-book">
                    <Card.Body className="p-5">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="5x" color="#6c757d" />
                        <div className="mt-4">Address Book</div>
                    </Card.Body>
                </NavLink>
            </Card>

            <Card className="text-center" border="secondary">
                <NavLink to="/account/orders">
                    <Card.Body className="p-5">
                        <FontAwesomeIcon icon={faBox} size="5x" color="#6c757d" />
                        <div className="mt-4">Orders</div>
                    </Card.Body>
                </NavLink>
            </Card>
        </CardDeck>
    </div>
)
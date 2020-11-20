import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Testimonials } from '../../components';

export const HomeScreen = () => (
    <React.Fragment>
        <div className="container-fluid">
            <div className="row">
                <Carousel className="mx-auto">
                    <Carousel.Item>
                        <img src="assets/images/hero-slide-1.png" alt="Shop our headphones" className="d-block w-100" />
                        <span className="slogan">Bring music to life.</span>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="assets/images/hero-slide-2.png" alt="Shop our headphones" className="d-block w-100" />
                        <span className="slogan">Play beyond.</span>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <img src="/assets/images/iphone.png" className="w-100" />
            </div>
        </div>
        <div className="container">
            <Testimonials />
        </div>
    </React.Fragment>
)
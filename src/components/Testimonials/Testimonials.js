import React from 'react';
import './Testimonials.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { gql, useQuery } from '@apollo/client';

SwiperCore.use([Autoplay]);

export const Testimonials = () => {
    const { data } = useQuery(gql`
        query {
            testimonials {
                id
                firstName
                lastName
                review
            }
        }
    `);

    return (
        <div className="testimonials mt-5 mb-5">
            <h2>What our customers are saying</h2>
            <Swiper
                autoplay={{
                    delay: 5000
                }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                className="mt-4"
                breakpoints={{
                    // when window width is >= 1000px
                    1000: {
                        slidesPerView: 2
                    },
                    // when window width is >= 1920px
                    1920: {
                        slidesPerView: 3
                    }
                }}
            >
                {
                    data && data.testimonials.map(testimonial => 
                        <SwiperSlide>
                            <div className="review-card">
                                <div className="layer"></div>
                                <div className="content">
                                    <FontAwesomeIcon icon={faQuoteRight} className="review-card__quote-mark" />
                                    <p className="review-card__review">
                                        {/* <FontAwesomeIcon icon={faQuoteLeft} className="review-card__quote-mark mr-3" /> */}
                                        {testimonial.review}  
                                    </p>
                                </div>
                                <h4 className="review-card__name">{testimonial.firstName} {testimonial.lastName}</h4>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}
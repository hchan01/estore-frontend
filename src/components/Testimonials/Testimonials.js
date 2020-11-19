import React, { useEffect } from 'react';
import './Testimonials.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([EffectCoverflow, Autoplay, Navigation]);

export const Testimonials = () => {
    useEffect(() => {
        // const swiper = new Swiper('.swiper-container', {
        //     effect: 'coverflow',
        //     grabCursor: true,
        //     centeredSlides: true,
        //     slidesPerView: 'auto',
        //     coverflowEffect: {
        //         rotate: 50,
        //         stretch: 0,
        //         depth: 0,
        //         modifier: 1,
        //         slideShadows: true
        //     },
        //     loop: true
        // });
    }, []);

    return (
        <div className="testimonials">
            <Swiper
                effect="coverflow"
                autoplay={{
                    delay: 5000
                }}
                disableOnInteraction={true}
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: true
                }}
                loop={true}
                navigation
            >
                <SwiperSlide>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>Great service from start to finish. Easy to find the product. Delivery tracking available. Very pleased with my product. Exceeded my expectations</p>
                            <div className="imgBx">
                                <img src="asd" />
                            </div>
                            <div className="details">
                                <h4>Max Harper</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>Shopped online. Easy to find the product, clear specs, pictures. Straightforward payment. Delivered on time.</p>
                            <div className="imgBx">
                                <img src="asd" />
                            </div>
                            <div className="details">
                                <h4>Leonard Stokes</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>Trusted company, honest and helpful. really good customer service well recommended. Would definitely use again.</p>
                            <div className="imgBx">
                                <img src="asd" />
                            </div>
                            <div className="details">
                                <h4>William Kennedy</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>Prompt service. Items packages correctly and received on time.</p>
                            <div className="imgBx">
                                <img src="asd" />
                            </div>
                            <div className="details">
                                <h4>Henry Clegg</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>A superb range of products and options, competitive prices and great service.</p>
                            <div className="imgBx">
                                <img src="asd" />
                            </div>
                            <div className="details">
                                <h4>Simone Swan</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>Good service, good delivery. Satisfied customer.</p>
                            <div className="imgBx">
                                <img src="asd" />
                            </div>
                            <div className="details">
                                <h4>Ciaran Travers</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>Prompt service, better than promised delivery, and good communication. No complaints at all! Thanks!</p>
                            <div className="imgBx">
                                <img src="asd" />
                            </div>
                            <div className="details">
                                <h4>Sabrina Hall</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
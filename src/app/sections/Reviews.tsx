'use client';

import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import './reviews.css';
import SectionTitle from '../components/SectionTitle';
import ReviewsItem from '../components/ReviewsItem';

type Review = {
    id: number;
    content: string;
    avatar: string;
    client: string;
    position: string;
};

export default function Reviews() {
    const [slides, setSlides] = useState<Review[]>([]);

    const getReviewsData = () => {
        fetch('/api/reviews')
            .then(res => res.json())
            .then(data => setSlides(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getReviewsData();
    }, []);

    return (
        <section id="reviews" className="reviews section-bg">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Reviews"
                    subtitle="Words from Our Guests"
                />

                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        slidesPerView={'auto'}
                        speed={600}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.reviews-swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="reviews-slider swiper-container"
                    >
                        {slides.length > 0 &&
                            slides.map(slide => (
                                <SwiperSlide key={slide.id}>
                                    <ReviewsItem item={slide} />
                                </SwiperSlide>
                            ))}
                    </Swiper>

                    <div className="reviews-swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}
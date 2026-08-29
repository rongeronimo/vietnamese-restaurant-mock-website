'use client';

import React, { useState, useEffect } from 'react';
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const initLightbox = async () => {
            const { default: GLightbox } = await import('glightbox');

            GLightbox({
                selector: '.glightbox',
            });
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Initialize GLightbox
        initLightbox();

        // Listen for scrolling
        window.addEventListener('scroll', handleScroll);

        // Check initial scroll position
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="hero" className="d-flex align-items-center">

            <div
                className="container position-relative text-center text-lg-start"
                data-aos="zoom-in"
                data-aos-delay="100"
            >
                <div className="row">

                    {/* Hero Content */}
                    <div className="col-lg-8">

                        <div
                            className="hero-eyebrow"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            AUTHENTIC VIETNAMESE CUISINE
                        </div>

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            Welcome to
                            <br />
                            <span>Nhà Hàng</span>
                        </h1>

                        <div
                            className="hero-divider"
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            <span></span>
                        </div>

                        <h2
                            data-aos="fade-up"
                            data-aos-delay="450"
                        >
                            Tradition on every plate.
                            <br />
                            <span>
                                Over <strong>20 years</strong> of Vietnamese
                                hospitality.
                            </span>
                        </h2>

                        <div
                            className="btns"
                            data-aos="fade-up"
                            data-aos-delay="550"
                        >
                            <HeroBtn
                                name="Book Now"
                                target="book-a-table"
                            />
                        </div>

                    </div>

                    {/* Video */}
                    <div
                        className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <a
                            href="https://www.youtube.com/watch?v=NEI1Dr9mdEc"
                            className="glightbox play-btn"
                            aria-label="Play restaurant video"
                        ></a>

                        <span className="hero-video-label">
                            WATCH OUR STORY
                        </span>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`hero-scroll ${
                    scrolled ? 'hero-scroll-hidden' : ''
                }`}
            >
                <span>SCROLL TO DISCOVER</span>
                <div className="scroll-line"></div>
            </div>

        </section>
    );
}
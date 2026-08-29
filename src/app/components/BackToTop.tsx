'use client';

import React, { useState, useEffect } from 'react';
import './backToTop.css';

export default function BackToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.dispatchEvent(new Event('backToHome'));

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <a
            onClick={backToTop}
            className={`back-to-top d-flex align-items-center justify-content-center ${
                scroll > 100 ? 'active' : ''
            }`}
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    );
}
'use client';

import React, { useEffect } from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';

export default function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');

            if (!header) return;

            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Set initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            id="header"
            className="fixed-top d-flex align-items-center"
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                <a
                    href=""
                    className="logo me-auto me-lg-0"
                >
                    <img
                        src="/assets/images/logo-header.png"
                        alt=""
                        className="img-fluid"
                    />
                </a>

                <Nav />

                <AppBtn name="EN / VI" />

            </div>
        </header>
    );
}
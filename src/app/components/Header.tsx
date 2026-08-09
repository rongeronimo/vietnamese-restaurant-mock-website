'use client';

import React, { useState, useEffect } from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';


export default function Header() {

    const [scroll, setScroll] = useState(0);
        
    useEffect(() => {
            window.addEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
            return () => {
                window.removeEventListener('scroll', () => {
                    setScroll(window.scrollY);
                });
            };
    }, [scroll]);

    return (
        <header 
            id='header' 
            className={` fixed-top d-flex align-items-center ${
                scroll > 100 ? 'header-scrolled' : undefined
        }`}
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                {/* <h1 className="logo me-auto me-lg-0">
                    <a>Xi Muoi</a>
                </h1> */}

                <a href="" className="logo me-auto me-lg-0">
                    <img src="assets/images/logo-viet.png" alt="" className="img-fluid"/>
                </a>

                <Nav />
                <AppBtn name='book a table'/>
            </div>
        </header>
    );
}

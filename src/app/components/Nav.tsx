'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { navs } from '../data/data';
import './nav.css';

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();

    const [navList, setNavList] = useState(navs);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    const handleNavActive = (scrollPosition: number) => {
        const position = scrollPosition + 200;

        setNavList(
            navList.map(nav => {
                nav.active = false;

                const targetSection = document.querySelector(
                    '#' + nav.target
                ) as HTMLElement | null;

                if (
                    targetSection &&
                    position >= targetSection.offsetTop &&
                    position <=
                        targetSection.offsetTop + targetSection.offsetHeight
                ) {
                    nav.active = true;
                }

                return nav;
            })
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setScroll(currentScroll);
            handleNavActive(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize active nav on page load
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleScrollTo = (section: string) => {
        const header = document.querySelector('#header') as HTMLElement;
        const targetEl = document.querySelector(
            '#' + section
        ) as HTMLElement;

        if (!header || !targetEl) return;

        const offset = header.offsetHeight;

        if (pathname === '/') {
            const elementPosition = targetEl.offsetTop;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        } else {
            router.push(`/#${section}`);
        }
    };

    return (
        <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
                open ? 'navbar-mobile' : ''
            }`}
        >
            <ul>
                {navList.map(nav => (
                    <li key={nav.id}>
                        <a
                            className={`nav-link scrollto ${
                                nav.active ? 'active' : ''
                            }`}
                            onClick={() => handleScrollTo(nav.target)}
                        >
                            {nav.name === 'Home' ? (
                                <i className="bi bi-house-door-fill"></i>
                            ) : (
                                nav.name
                            )}
                        </a>
                    </li>
                ))}
            </ul>

            <i
                className="bi bi-list mobile-nav-toggle"
                onClick={handleToggleMenu}
            ></i>
        </nav>
    );
}
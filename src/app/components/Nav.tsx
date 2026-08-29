'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { navs } from '../data/data';
import './nav.css';

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();

    const [activeNavId, setActiveNavId] = useState(navs[0].id);
    const [open, setOpen] = useState(false);

    // Prevent the scroll listener from changing the active item
    // while we're performing a smooth scroll from a click.
    const isProgrammaticScroll = useRef(false);

    const handleNavOnClick = (id: number) => {
        setActiveNavId(id);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Don't change the active navigation item while
            // a clicked navigation item is smoothly scrolling.
            if (isProgrammaticScroll.current) {
                return;
            }

            const position = window.scrollY + 200;

            const currentNav = navs.find(nav => {
                const section = document.querySelector(
                    `#${nav.target}`
                ) as HTMLElement | null;

                if (!section) return false;

                return (
                    position >= section.offsetTop &&
                    position <=
                        section.offsetTop + section.offsetHeight
                );
            });

            if (currentNav) {
                setActiveNavId(currentNav.id);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Determine initial active section
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleMenu = () => {
        setOpen(prev => !prev);
    };

    const handleScrollTo = (section: string) => {
        const header = document.querySelector(
            '#header'
        ) as HTMLElement | null;

        const targetEl = document.querySelector(
            '#' + section
        ) as HTMLElement | null;

        if (!header || !targetEl) return;

        const offset = header.offsetHeight;

        if (pathname === '/') {
            const elementPosition = targetEl.offsetTop;

            // Tell the scroll listener to ignore the smooth scroll
            isProgrammaticScroll.current = true;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });

            // Allow scroll detection again after the animation
            setTimeout(() => {
                isProgrammaticScroll.current = false;
            }, 800);
        } else {
            router.push(`/#${section}`);
        }
    };

    useEffect(() => {
        const handleBackToHome = () => {
            const homeNav = navs.find(nav => nav.target === 'hero');

            if (homeNav) {
                setActiveNavId(homeNav.id);
            }

            isProgrammaticScroll.current = true;

            setTimeout(() => {
                isProgrammaticScroll.current = false;
            }, 800);
        };

        window.addEventListener('backToHome', handleBackToHome);

        return () => {
            window.removeEventListener('backToHome', handleBackToHome);
        };
    }, []);

    return (
        <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
                open ? 'navbar-mobile' : ''
            }`}
        >
            <ul>
                {navs.map(nav => (
                    <li key={nav.id}>
                        <a
                            className={`nav-link scrollto ${
                                activeNavId === nav.id ? 'active' : ''
                            }`}
                            onClick={() => {
                                handleNavOnClick(nav.id);
                                handleScrollTo(nav.target);
                                setOpen(false);
                            }}
                        >
                            {nav.name}
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
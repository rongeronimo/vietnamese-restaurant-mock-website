'use client';

import React from 'react';
import './heroBtn.css';

export default function HeroBtn({
    name,
    target,
}: {
    name: string;
    target: string;
}) {
    const handleScrollTo = (section: string) => {
        const header = document.querySelector('#header') as HTMLElement;
        const targetEl = document.querySelector(
            `#${section}`
        ) as HTMLElement;

        if (!header || !targetEl) return;

        const offset = header.offsetHeight;

        window.scrollTo({
            top: targetEl.offsetTop - offset,
            behavior: 'smooth',
        });
    };

    return (
        <a
            onClick={() => handleScrollTo(target)}
            className={`btn-hero animated fadeInUp scrollto ${
                target === 'book-a-table' ? '' : ''
            }`}
        >
            {name}
        </a>
    );
}
'use client';

import React from 'react';
import './appBtn.css';

export default function AppBtn({ name }: { name: string }) {

    const handleScrollTo = () => {
        // const header = document.querySelector('#header') as HTMLElement;
        // const targetEl = document.querySelector(
        //     '#book-a-table'
        // ) as HTMLElement;

        // if (!header || !targetEl) return;

        // const offset = header.offsetHeight;
        // const elementPosition = targetEl.offsetTop;

        // window.scrollTo({
        //     top: elementPosition - offset,
        //     behavior: 'smooth',
        // });
    };

    return (
        <a
            className="app-btn scrollto d-none d-lg-flex"
            onClick={handleScrollTo}
        >
            {name}
        </a>
    );
}
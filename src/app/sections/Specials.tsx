'use client';

import React, { useState, useEffect } from 'react';
import './specials.css';
import SectionTitle from '../components/SectionTitle';
import { specialsFilters } from '../data/data';
import Preloader from '../components/Preloader';
import SpecialsItem from '../components/SpecialsItem';

type Special = {
    id: number;
    image: string;
    title: string;
    price: number;
    subtitle: string;
    content: string;
    active: boolean;
};

export default function Specials() {
    const [items, setItems] = useState<Special[]>([]);

    const getSpecialsData = () => {
        fetch('/api/specials')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getSpecialsData();
    }, []);

    const handleFilterActive = (id: number) => {
        specialsFilters.map(filter => {
            filter.active = false;
            if (filter.id === id) filter.active = true;
        });
    };

    const handleSpecialChange = (id: number) => {
        handleFilterActive(id);
        const updatedItems = items.map(item => ({
            ...item,
            active: item.id === id,
        }));

        setItems(updatedItems);
    };

    return (
        <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Specials"
                    subtitle="Available for a Limited Time"
                />

                <div
                    className="row"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            {specialsFilters.map(filter => (
                                <li
                                    className="nav-item"
                                    key={filter.id}
                                >
                                    <a
                                        className={`nav-link ${
                                            filter.active
                                                ? 'active show'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleSpecialChange(filter.id)
                                        }
                                    >
                                        {filter.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            {items.length > 0 ? (
                                items.map(item => (
                                    <SpecialsItem
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            ) : (
                                <Preloader />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client';

import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryItem from '../components/GalleryItem';
import Preloader from '../components/Preloader';

type GalleryImage = {
    id: number;
    image: string;
};

export default function Gallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);

    const getGalleryData = () => {
        fetch('/api/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getGalleryData();
    }, []);

    return (
        <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Gallery"
                    subtitle="A Visual Taste of Vietnam"
                />
            </div>

            <div
                className="container-fluid"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="row g-0">
                    {images.length > 0 ? (
                        images.map(image => (
                            <GalleryItem
                                key={image.id}
                                item={image}
                            />
                        ))
                    ) : (
                        <Preloader />
                    )}
                </div>
            </div>
        </section>
    );
}
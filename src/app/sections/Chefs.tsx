import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ChefsItem from '../components/ChefsItem';
import { chefs } from '../data/data';

export default function Chefs() {
    return (
        <section id="chefs" className="chefs">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Chefs"
                    subtitle="Meet the Culinary Masters"
                />

                <div className="row">
                    {chefs.map((item) => (
                        <ChefsItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
'use client';

import React, { useState, ChangeEvent } from 'react';
import './booking.css';
import SectionTitle from '../components/SectionTitle';

type BookingForm = {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    people: string;
    message: string;
    validate: '' | 'loading' | 'incomplete' | 'success' | 'error';
};

export default function Booking() {
    const initialState: BookingForm = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState<BookingForm>(initialState);

    const handleTextChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setText(prev => ({
            ...prev,
            [name]: value,
            validate: '',
        }));
    };

    const handleSubmitBooking: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (
            text.name === '' ||
            text.email === '' ||
            text.date === '' ||
            text.time === ''
        ) {
            setText(prev => ({
                ...prev,
                validate: 'incomplete',
            }));
            return;
        }

        setText(prev => ({
            ...prev,
            validate: 'loading',
        }));

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            if (!response.ok) {
                throw new Error('Failed to submit booking');
            }

            const result = await response.json();

            setText(prev => ({
                ...prev,
                validate: 'success',
            }));

            console.log('Success:', result);
        } catch (error) {
            setText(prev => ({
                ...prev,
                validate: 'error',
            }));

            console.error('Error:', error);
        }
    };

    return (
        <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Reservation"
                    subtitle="Book a Table"
                />

                <form
                    onSubmit={handleSubmitBooking}
                    className="booking-form"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name="name"
                                value={text.name}
                                className="form-control"
                                placeholder="Enter your name"
                                onChange={handleTextChange}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={text.email}
                                placeholder="youremail@email.com"
                                onChange={handleTextChange}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-lg-0">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={text.phone}
                                placeholder="+1 555 555 1212"
                                onChange={handleTextChange}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="date"
                                name="date"
                                value={text.date}
                                className="form-control"
                                onChange={handleTextChange}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="time"
                                className="form-control"
                                name="time"
                                value={text.time}
                                onChange={handleTextChange}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="number"
                                className="form-control"
                                name="people"
                                value={text.people}
                                placeholder="# of seats"
                                onChange={handleTextChange}
                            />
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            name="message"
                            value={text.message}
                            rows={5}
                            placeholder="Message/Special Instructions"
                            onChange={handleTextChange}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        {text.validate === 'loading' && (
                            <div className="loading">
                                Sending Booking...
                            </div>
                        )}

                        {text.validate === 'incomplete' && (
                            <div className="error-message">
                                Please fill in all of the fields
                            </div>
                        )}

                        {text.validate === 'success' && (
                            <div className="sent-message">
                                Your booking request was sent. We will call
                                back or send an email to confirm your
                                reservation. Thank you!
                            </div>
                        )}

                        {text.validate === 'error' && (
                            <div className="error-message">
                                Server Error
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
import React, { useState } from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the styles
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email validation function
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (formData.name.trim() === '') {
            toast.error('Please enter your name');
            return;
        }
        if (formData.email.trim() === '' || !validateEmail(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }
        if (formData.phone.trim() === '') {
            toast.error('Please enter your phone number');
            return;
        }
        if (formData.message.trim() === '') {
            toast.error('Please enter your message');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post(
                'https://dev.shivcomputers.in/api/v1/contact-us',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data.status) {
                toast.success(response.data.message || 'Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                toast.error(response.data.message || 'Submission failed!');
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                toast.error('Validation error. Please check your inputs.');
            } else {
                console.error(error);
                toast.error('An error occurred. Please try again later.');
            }
        } finally {
            setIsSubmitting(false);
        }

    };

    return (
        <>
            <Helmet>
                <title>Contact || Shiv Computers</title>
            </Helmet>
            <Breadcrumb title="Contact" />
            <div className="container">
                {/* Contact Information */}
                <div className="row py-4">
                    <div className="col-md-4">
                        <p className="fs-5"><i className="bi bi-telephone"></i> <strong>Phone:</strong></p>
                        <p>+91 94 269 75 796</p>
                        <p>+91 94 282 92 283</p>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-5"><i className="bi bi-geo-alt"></i> <strong>Address:</strong></p>
                        <p>
                            Shiv Computers <br />
                            2<sup>nd</sup> Floor, Ajay Arcade, <br />
                            Jawahar Chowk, Opp Upkar Saree Showroom, <br />
                            Surendranagar 363001, Gujarat
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-5"><i className="bi bi-envelope"></i> <strong>Email:</strong></p>
                        <p>shivcomputer.snr@gmail.com</p>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="row py-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29438.49270894508!2d71.6214358198795!3d22.73524335006456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395941a4ddc51fff%3A0xd6a1b80d526b969d!2sShiv%20Computers!5e0!3m2!1sen!2sin!4v1723790860507!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        style={{ border: '0px' }}
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shiv Computers Location"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <form className="row py-3" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter your phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-12">
                            <textarea
                                className="form-control"
                                rows={5}
                                placeholder="Enter your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col text-center">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;

import React from 'react';
import "../assets/style.css";
import Header from '../Header/Header';

const Contact = () => {
    return (
        <>
        
        <div className="card contact_main_card">
            <div className="banner" name="about-header">
                <h1>Contact Us</h1>
                <img className="contact-img" src="/static/contactus.png" alt="Card"/>
            </div>
            <div className='d-flex'>
                <div className="card flex-fill">
                    <div className="card-body">
                        <p className="title">Contact Numbers</p>
                        <h4>Toll free(Inside U.S)</h4>
                        <p>+1800-345-567</p>
                        <h4>Toll free(Outside U.S)</h4>
                        <p>+1800-345-987</p>
                    </div>
                </div>
                <div className="card flex-fill">
                    <div className="card-body">
                        <p className="title">Customer Service</p>
                        <h4>National customer service</h4>
                        <p>contact@dealership.com</p>
                        <h4>National Advertising team</h4>
                        <p>advertise@dealership.com</p>
                    </div>
                </div>
            </div>
    </div>
        </>
    )
}

export default Contact
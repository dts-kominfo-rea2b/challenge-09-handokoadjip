// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    const { name, email, phone, photo } = props.data;
    return (
        <>
            <div className="contact">
                <div className="contact-photo">
                    <img src={photo} alt={name} />
                </div>
                <div className="contact-info">
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </div>
        </>
    )
}

export default Contact;
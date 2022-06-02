import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])

    const form = useRef()
    const sendEmail = (evt) => {
        evt.preventDefault()
        emailjs
            .sendForm(
                'gmail',
                'template_YeJhZkgb',
                form.current,
                'your-token',
            )
            .then(
                () => {
                    alert("Your message is sent! Thank You!")
                    window.location.reload(false)
                },
                () => {
                    alert("Could not send message! Please try again later!")
                }
            )
    }

    return (
        <div>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'J', 'a', 'S', 'o', 'n']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm very keen on looking for an opportunity to work for a tech company which is especially ambitious or owns
                        large projects.
                    </p>
                    <p>
                        Feel free to contact me by using following form if you have further request or question.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </li>
                                <li>
                                    <input placeholder="Your Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Your Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Jason Sang Tran
                    <br />
                    Ho Chi Minh city, 700000
                    <br />
                    Vietnam
                    <span>tranmsang541197@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[10.775187967159574, 106.64923269696077]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[10.775187967159574, 106.64923269696077]}>
                            <Popup>Jason's there, come over</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default Contact

import React from 'react'
import './styles/Footer.css'
import { Button, ListGroup } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import { FcCallback, FaEnvelope, FcRefresh } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Link, useHistory } from 'react-router-dom';

export const Footer = () => {

    const phoneNumber = '+91 973-067-6430'
    const history = useHistory();

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <div className='footer-container-main'>
            <div className='footer-container'>
                <div>
                    <img height={90} src='https://www.tecygig.com/img/tecygiglogo.png' />
                    <p>Tecygig (Technology Vechile) is one of the leading company with full of young energy which was
                        founded in 2020. We take the honour to introduce ourself as one of the fastest growing company.
                    </p>
                    <button className='buttn-icon' onClick={() => { window.location.href = 'https://www.facebook.com/Tecygig/'; }} >
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/fb-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon' onClick={() => { window.location.href = 'https://twitter.com/home'; }}>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tw-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon' onClick={() => { window.location.href = 'https://www.facebook.com/Tecygig/'; }}>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/insta-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon' onClick={() => { window.location.href = 'https://www.linkedin.com/company/tecygig/'; }}>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/in-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon' onClick={() => { window.location.href = 'https://in.pinterest.com/tecygig/_saved/'; }}>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tp-icon.svg' />
                    </button>{' '}
                    <br /><br />
                    <Button variant="outline-success">About Us</Button>{' '}
                </div>
                <div>
                    <h3 style={{ marginLeft: "30px" }}>Company</h3>
                    <hr />
                    <ul style={{ marginLeft: "30px" }}>
                        <li>about Us</li>
                        <li>Our services</li>
                        <li>Portfolio</li>
                        <li>Pricing Plan</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h4>Branch Office Address</h4>
                    <hr />
                    <p>Shop No.41/1 Khilji Mension,
                        junction, near Kalpana Xerox, Kalina, Santacruz East, Mumbai, Maharashtra 400029
                    </p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <hr />
                    <p>Let's go! Please fill out your details below and we will get back to you within 24 hours.</p>
                    <ul className='no-bullet' style={{ fontSize: "18px", marginLeft: "-19px" }}>
                        <li><Link to={`tel:${phoneNumber}`} style={{ textDecoration: "none", color: "rgb(173, 168, 168)" }} onClick={handleClick}><FcCallback /> : {phoneNumber}</Link></li>
                        <li> <AiOutlineMail /> : tecygig@gmail.com</li>
                        <li><AiOutlineMail /> :  info@tecygig.com</li>
                        <li><FcRefresh /> : 5 ,3A-Bwing Shradda</li>

                    </ul>
                    <p>Darshan Yeshwant Nagar Opp Shiv Sena Office Vakola Santacruz East 400055 Mumbai</p>
                </div>
            </div>

            <div className='last-footer-div'>
                <p >© Copyright Tecygig. Design & Development By Tecygig</p>
            </div>
        </div>

    )
}


import React from 'react'
import './styles/Footer.css'
import { Button, ListGroup } from 'react-bootstrap';

export const Footer = () => {
    return (
        <div className='footer-container-main'>
            <div className='footer-container'>
                <div>
                    <img height={90} src='https://www.tecygig.com/img/tecygiglogo.png' />
                    <p>Tecygig (Technology Vechile) is one of the leading company with full of young energy which was
                        founded in 2020. We take the honour to introduce ourself as one of the fastest growing company.
                    </p>
                    <button className='buttn-icon' >
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/fb-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon'>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tw-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon'>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/insta-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon'>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/in-icon.svg' />
                    </button>{' '}
                    <button variant="outline-primary" className='buttn-icon'>
                        <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/yt-icon.svg' />
                    </button>{' '}
                    <br /><br />
                    <Button variant="outline-success">About Us</Button>{' '}
                </div>
                <div>
                    <h3>Company</h3>
                    <hr />
                    <ul>
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
                    <ul className='no-bullet'>
                        <li>Phone: +(91) 973-067-6430</li>
                        <li>tecygig@gmail.com</li>
                        <li>info@tecygig.com</li>
                        <li>5 ,3A-Bwing Shradda</li>

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
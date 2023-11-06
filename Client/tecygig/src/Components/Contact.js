import React from 'react'
import './styles/Contact.css'
import { Footer } from './Footer'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='Contact-main-container'>


      <div className='container-social-media'>
        <div>
          <h2>Social Media</h2>
          <p>Don’t Miss To Follow Us On Our Social<br /> Networks Accounts.</p>
        </div>
        <div >
          <Button variant="outline-dark" className='btun-social-icon'>
            <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/fb-icon.svg' />
          </Button>
          <Button variant="outline-dark" className='btun-social-icon'>
            <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tw-icon.svg' />
          </Button>
          <Button variant="outline-dark" className='btun-social-icon'>
            <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/insta-icon.svg' />
          </Button>
          <Button variant="outline-dark" className='btun-social-icon'>
            <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/in-icon.svg' />
          </Button>
          <Button variant="outline-dark" className='btun-social-icon'>
            <img src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/yt-icon.svg' />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

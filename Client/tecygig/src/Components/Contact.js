import React from 'react'
import './styles/Contact.css'
import { Footer } from './Footer'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import FormComponent from './asets/Userform';

const Contact = () => {
  return (
    <div className='Contact-main-container'>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <p style={{ textAlign: "center" }}>We would be happy to hear from you, please fill in the form below or mail us your requirements on<br />
        <span style={{ color: "red" }}>info AT tecygig.com</span>
      </p>
      <Container>
        <Row className='form-cont'>
          <Col lg={10} sm={12} className='shadow'>
            <FormComponent />
          </Col>
        </Row>

      </Container>
      <br />
      <Container className='fresher-container' style={{backgroundColor:"#c3b7b78f",color:"black"}}>
        <h1 className='p-1  '>Mumbai Office</h1>
        <p className='p-2 fs-5'>5 ,3A-Bwing Shradda
          Darshan Yeshwant Nagar Opp Shiv Sena Office Vakola <br />Santacruz East 400055 Mumbai
        </p>
        <Button className='m-2' variant="success">+(91) 973-067-6430</Button>{' '}
        <Button className='m-2' variant="success">tecygig@gmail.com</Button>{' '}
        <Button className='m-2' variant="success">info@Tecygig.com</Button>{' '}
      </Container>

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

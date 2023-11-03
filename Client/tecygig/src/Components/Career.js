import React, { Component } from 'react'
import './styles/Career.css'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import AppsCareercarausal from './careerpage-carausal/carausal-career/AppsCareercarausal';
import {Footer} from './Footer'

export default class Career extends Component {
    render() {
        return (
            <div className='career-main-container'>

                <Container className='fresher-container'>
                    <h1 className='p-1  '>Are you a fresher?</h1>
                    <p className='p-2 fs-5'>Are you a fresher?
                        Let's start your career together. At Hyperlink InfoSystem, we will sharpen<br />
                        your technical to communication skills.
                    </p>
                    <Button className='m-2' variant="success">About Us</Button>{' '}
                </Container>

                <Container>
                    <div id="container-career">
                        <div className="items-career">
                            <h2 className='m-1'>Career</h2>
                            <p className='ptag-better'>Better Together, Grow Together<br /><br></br>

                                We are one of the best places to work. Hyperlink InfoSystem creates an 
                                atmosphere where you can grow your inner self, show your talents, get the 
                                best out of your own self. We believe in invention of new processes that ease 
                                your work. The work place at Hyperlink InfoSystem is very flexible.<br/><br />

                                We are looking for some fresh talents who can add cultural values at Hyperlink
                                 InfoSystem, some one who has the same mission that is ours but also can bring
                                  diversity at the same time.
                            </p>
                        </div>
                        <div className="items-career">
                            <img style={{width:"100%"}} className='img-company-career' src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/office-img-1.png' />
                        </div>

                    </div>
                </Container>

                <AppsCareercarausal />

<h1 style={{textAlign:"center",marginTop:"20px"}}>Current Openings</h1>
<Container>
    <Row className='border vacancy-container'>
        <Col sm={12}>
            <div>
                <h3>React developer</h3>
                <p>Required experience – 2 to 4 Years</p>
            </div>
            <div>
                <h3>Positions</h3><p>1</p>
            </div>
            <div>
                <Button>Send CV</Button>
            </div>

        </Col>
        <Col sm={12}>
        <div>
                <h3>React developer</h3>
                <p>Required experience – 2 to 4 Years</p>
            </div>
            <div>
                <h3>Positions</h3><p>1</p>
            </div>
            <div>
                <Button>Send CV</Button>
            </div>

        </Col>
        <Col sm={12}>
        <div>
                <h3>React developer</h3>
                <p>Required experience – 2 to 4 Years</p>
            </div>
            <div>
                <h3>Positions</h3><p>1</p>
            </div>
            <div>
                <Button>Send CV</Button>
            </div>

        </Col>
    </Row>
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
}
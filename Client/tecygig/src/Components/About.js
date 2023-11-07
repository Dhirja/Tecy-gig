import React, { Component } from 'react'
import './styles/About.css'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { FcBiotech, FcFrame, FcWorkflow, FcMultipleDevices, FcRating, FcShipped, FcVoicePresentation } from "react-icons/fc";
import {Footer} from './Footer'

export default class About extends Component {
    render() {
        return (
            <div className='about-main-container'>
                <Container>
                    <Row className='border about-row'>
                        <Col className='border ' sm={6}>
                            <img className='img-about' height={340} src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/office-img-1.png' />
                        </Col>
                        <Col sm={6}>
                            <h1 className='about-us'>About Us</h1>
                            <p className='aim-ptag'>Our Only Aim, <span style={{ color: "green" }}>Happy Clients.</span></p>
                        </Col>
                        <Col sm={6} >
                            <h2 className='mt-3 p-2'>We Provide Quality Business & Smart Solution</h2>
                            <p className=' p-2 mt-3 ptag'>Tecygig (Technology Vechile) is one of the leading company with full of young
                                energy which was founded in 2020. We take the honour to introduce ourself as
                                one of the fastest growing company.
                            </p>
                        </Col>
                        <Col sm={6}>
                            <img className='img-tecy' src='https://www.tecygig.com/img/about.jpg' />
                        </Col>
                    </Row>
                </Container>

                <Container className='ptag-container'>
                    <p>
                        We have a good and proper coordinating partnership between the company's intramural internal environments and emerging external IT surrounding. The enhanced brand equity and sales shall actually determine the promising results of this IT service provider. The success of the company is measured in such a way on how the people share, enjoy as well as obtain advantages from the efficacy. Some of our company values are hard work, growth, integrity, enthusiasm, and helping each other.<br /><br />

                        The management believes that infinite opportunities are provided by the growth of the company as well as the individuals. The success shall be celebrated by comprehending the alterations towards growth. The value we create will normally be consistent with that of the company's mission and we make use of both amazing effort and intelligence in order to safeguard the created values. Hyperlink will never mind about the consequences and will carry out the things if it feels to be correct accordingly. The employees of the company are passionate towards the work and will put the efforts to reach success as well as to achieve the objectives irrespective of the surroundings and situations. We are more helpful in the success of each other and are careful in establishing a long-term partnership with the clients and customers.
                    </p>
                </Container>

                <Container>
                    <Row className='year-container'>
                        <Col sm={6} className='border' >
                            <Button variant="danger" id='buttn-year'>2020</Button>
                        </Col>
                        <Col sm={6} className='border' >
                            <h2 className='htag-company'>The Company Born</h2>
                            <p className='born'>Tecygigwas born in the year 2020 The company has been kick-started by one
                                great man – Harnil Oza with the exceptional passion & long vision.
                            </p>
                        </Col>

                        <Col sm={6} className='border' >
                            <Button variant="danger" id='buttn-year'>2021</Button>
                        </Col>
                        <Col sm={6} className='border' >
                            <h2 className='htag-company'>Rising Star</h2>
                            <p className='born'>The company was blooming from small to bigger star. In the initial years only, company worked with very well-known names of the industry.
                            </p>
                        </Col>
                        <Col sm={6} className='border' >
                            <Button variant="danger" id='buttn-year'>2022</Button>
                        </Col>
                        <Col sm={6} className='border' >
                            <h2 className='htag-company'>Exploring New Horizons</h2>
                            <p className='born'>Year by year the company was showing the sign to be superstar in the Mobile App Industry. Tecygig was gaining full trust of the clients. Company started work on many new projects, technologies which helped them to explore new horizons.
                            </p>
                        </Col>
                        <Col sm={6} className='border' >
                            <Button variant="danger" id='buttn-year'>2023</Button>
                        </Col>
                        <Col sm={6} className='border' >
                            <h2 className='htag-company'>Never Ending Taste Of Success</h2>
                            <p className='born'>Tecygig had become a brand now. The company set a benchmark and gained the trust of clients from all over the world. The company was getting bigger & better as far as size is concerned.
                            </p>
                        </Col>
                        
                    </Row>
                </Container>

                <div className='container-process-follow'>
                    <h1 className='head-proces'>Process We Follow</h1>
                    <div className='flexx-process'>
                        <div>
                            <FcBiotech style={{ fontSize: "70px", padding: "3px" }} />
                            <h5 className='p-2 m-1'>1. Requirement Gathering</h5>
                            <p className='fs-5 p-3'>
                                We follow the first and foremost priority of gathering requirements,
                                resources, and information to begin our project.
                            </p>
                        </div>
                        <div>
                            <FcFrame style={{ fontSize: "70px", padding: "3px" }} />
                            <h5 className='p-2 m-1'>2. UI/UX Design</h5>
                            <p className='fs-5 p-3'>
                                We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.
                            </p>
                        </div>
                        <div>
                            <FcWorkflow style={{ fontSize: "70px", padding: "3px" }} />
                            <h5 className='p-2 m-1'>3. Prototype</h5>
                            <p className='fs-5 p-3'>
                                After designing, you will get your prototype, which will be sent ahead for the development process for the product.
                            </p>
                        </div>
                        <div>
                            <FcMultipleDevices style={{ fontSize: "70px", padding: "3px" }} />
                            <h5 className='p-2 m-1'>4. Development</h5>
                            <p className='fs-5 p-3'>
                                Development of mobile application/web/blockchain started using latest tools and technologies with transparency.
                            </p>
                        </div>
                        <div>
                            <FcRating style={{ fontSize: "70px", padding: "3px" }} />
                            <h5 className='p-2 m-1'>5. Quality Assurance</h5>
                            <p className='fs-5 p-3'>
                                Hyperlink values quality and provides 100% bug free application with no compromisation in it.
                            </p>
                        </div>
                        <div>
                            <FcShipped style={{ fontSize: "70px", padding: "3px" }} />
                            <h5 className='p-2 m-1'>6. Deployment</h5>
                            <p className='fs-5 p-3'>
                                After trial and following all processes, your app is ready to launch on the App store or Play Store.
                            </p>
                        </div>
                        <div>
                            <FcVoicePresentation style={{ fontSize: "70px", padding: "3px" }} />
                            <h5 className='p-2 m-1'>7. Support & Maintenance</h5>
                            <p className='fs-5 p-3'>
                                Our company offers you all support and the team is always ready to answer every query after deployment.
                            </p>
                        </div>
                    </div>

                </div>

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

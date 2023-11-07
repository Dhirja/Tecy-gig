import React, { Component, useState } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Modal } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services'
import Career from './Career'
import FormComponent from './asets/Userform';

export const NavbarComp = () => {

    const [show, setShow] = useState(false);
    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);
    const phoneNumber = '+91 810-872-7255'

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`;
      };

    return (
        <Router>
            <div>

                <Navbar bg="light" expand="lg" className="fixed-top fs-5 border shadow-sm">
                    <div className='d-flex justify-content-between container-fluid'>

                        <Navbar.Brand href="/">
                            <img height={60} src='https://www.tecygig.com/img/tecygiglogo.png' />
                        </Navbar.Brand>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav
                                    // className="mr-auto my-2 my-lg-0"
                                    // style={{ maxHeight: '100px' }}
                                    className="ml-auto"
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                    <Nav.Link as={Link} to="/career">Career</Nav.Link>
                                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                    <Nav.Link as={Link} to={`tel:${phoneNumber}`} onClick={handleClick}>
                                        {phoneNumber}
                                    </Nav.Link>
                                    <Button variant="outline-success" onClick={handleShow} >Get A Free Quote</Button>{' '}

                                    {/* <h6>+91 81087 27255</h6> */}

                                </Nav>

                            </Navbar.Collapse>
                        </div>

                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>TecyGig Team</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormComponent />

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/career">
                        <Career />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}

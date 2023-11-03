import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services'
import Career from './Career'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <div className='d-flex justify-content-around border container-fluid'>

                            <Navbar.Brand href="/">
                                <img height={70} src='https://www.tecygig.com/img/tecygiglogo.png' />
                            </Navbar.Brand>
                            <div>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="mr-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                        <Nav.Link as={Link} to="/career">Career</Nav.Link>
                                        <Nav.Link as={Link} to="/services">Services</Nav.Link>

                                    </Nav>

                                </Navbar.Collapse>
                            </div>

                        </div>

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
}

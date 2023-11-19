import React, { useEffect, useState, useContext } from "react";
import { Navbar, Button, Nav, Modal } from "react-bootstrap";
import { LoginContext } from "./ContextProvider/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import { Career } from "./Career";
import FormComponent from "./asets/Userform";
import AdmnSignLogin from "./AdminAuth/AdmnSignLogin";
import { Login } from "./AdminAuth/Login";
import { AmdminPage } from "./AdminAuth/Admin-page/AmdminPage";
import HrPage from "./AdminAuth/Hr/HrPage";

export const NavbarComp = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const history = useHistory();
  const [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  const phoneNumber = "+91 810-872-7255";

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  let token = localStorage.getItem("token");

  //get user current
  const getUser = async () => {
    const res = await fetch("http://localhost:8080/api/v1/auth/current-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")} `,
      },
    });
    const data = await res.json();
    if (!data.success) {
      console.log("current user not getted");
    } else {
      console.log("user verify", data);

      if (data?.user?.role == "admin") {
        const userData = JSON.stringify(data.user);
        localStorage.setItem("userData", userData);
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        setLoginData(userDatas);
        console.log(logindata);
        history.push("/admin");
      } else {
        const userData = JSON.stringify(data.user);
        localStorage.setItem("userData", userData);
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        setLoginData(userDatas);
        console.log(logindata);
        history.push("/Hr");
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Router>
      <div>
        <Navbar
          bg="light"
          expand="lg"
          className="fixed-top fs-5 border shadow-sm"
        >
          <div className="d-flex justify-content-between container-fluid">
            <Navbar.Brand className="d-flex">
              <img
                height={60}
                src="https://www.tecygig.com/img/tecygiglogo.png"
              />
              {!logindata ? (
                <Nav.Link as={Link} to="/profile">
                  <Button className="m-2" variant="outline-success">
                    Profile
                  </Button>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to={`/${logindata?.role}`}>
                  <Button className="m-2" variant="outline-success">
                    {logindata?.role}
                  </Button>
                </Nav.Link>
              )}
            </Navbar.Brand>

            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  // className="mr-auto my-2 my-lg-0"
                  style={{ color: "#2E2751" }}
                  className="ml-auto"
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/" style={{ color: "#2E2751" }}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about" style={{ color: "#2E2751" }}>
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/services"
                    style={{ color: "#2E2751" }}
                  >
                    Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="/career" style={{ color: "#2E2751" }}>
                    Career
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    style={{ color: "#2E2751" }}
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`tel:${phoneNumber}`}
                    onClick={handleClick}
                    style={{ color: "#2E2751" }}
                  >
                    {phoneNumber}
                  </Nav.Link>
                  <Button variant="outline-success" onClick={handleShow}>
                    Get A Free Quote
                  </Button>{" "}
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <AdmnSignLogin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <AmdminPage />
          </Route>
          <Route path="/Hr">
            <HrPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
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
  );
};

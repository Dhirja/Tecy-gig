import React, { useState, useEffect } from "react";
import "./styles/Career.css";
// import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Modal,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppsCareercarausal from "./careerpage-carausal/carausal-career/AppsCareercarausal";
import { Footer } from "./Footer";
import ResumeForm from "./asets/studentForm";

export const Career = () => {
  const [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/job/getalljobs"
        );
        const result = await response.json();
        setData(result.jobs);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="career-main-container">
      <Container className="fresher-container">
        <h1 className="p-1  ">Are you a fresher?</h1>
        <p className="p-2 fs-5">
          Are you a fresher? Let's start your career together. At Tecygig, we
          will sharpen
          <br />
          your technical to communication skills.
        </p>
        <Button className="m-2" variant="success" onClick={handleShow}>
          Apply Here
        </Button>{" "}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TecyGig Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResumeForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Container>
        <div id="container-career">
          <div className="items-career">
            <h2 className="m-1">Career</h2>
            <p className="ptag-better">
              Better Together, Grow Together
              <br />
              <br></br>
              We are one of the best places to work. Tecygig creates an
              atmosphere where you can grow your inner self, show your talents,
              get the best out of your own self. We believe in invention of new
              processes that ease your work. The work place at Tecygig is very
              flexible.
              <br />
              <br />
              We are looking for some fresh talents who can add cultural values
              at Tecygig , some one who has the same mission that is ours but
              also can bring diversity at the same time.
            </p>
          </div>
          <div className="items-career">
            <img
              style={{ width: "100%" }}
              className="img-company-career"
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/office-img-1.png"
            />
          </div>
        </div>
      </Container>

      <AppsCareercarausal />

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Current Openings
      </h1>
      <Container>
        <Row className="border vacancy-container">
          {data.map((item) => (
            <Col key={item._id} sm={12}>
              <div>
                <h5>{item.position}</h5>
                <p>Required experience– {item.experience}</p>
              </div>
              <div>
                <h5>Positions</h5>
                <p>{item.openings}</p>
              </div>
              <div>
                <Button onClick={handleShow}>Apply</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="container-social-media">
        <div>
          <h2>Social Media</h2>
          <p>
            Don’t Miss To Follow Us On Our Social
            <br /> Networks Accounts.
          </p>
        </div>
        <div>
          <Button
            variant="outline-dark"
            className="btun-social-icon"
            onClick={() => {
              window.location.href = "https://www.facebook.com/Tecygig/";
            }}
          >
            <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/fb-icon.svg" />
          </Button>
          <Button
            variant="outline-dark"
            className="btun-social-icon"
            onClick={() => {
              window.location.href = "https://twitter.com/home";
            }}
          >
            <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tw-icon.svg" />
          </Button>
          <Button
            variant="outline-dark"
            className="btun-social-icon"
            onClick={() => {
              window.location.href = "https://www.facebook.com/Tecygig/";
            }}
          >
            <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/insta-icon.svg" />
          </Button>
          <Button
            variant="outline-dark"
            className="btun-social-icon"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/company/tecygig/";
            }}
          >
            <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/in-icon.svg" />
          </Button>
          <Button
            variant="outline-dark"
            className="btun-social-icon"
            onClick={() => {
              window.location.href = "https://in.pinterest.com/tecygig/_saved/";
            }}
          >
            <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tp-icon.svg" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

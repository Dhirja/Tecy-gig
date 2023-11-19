import React from "react";
import "./styles/Contact.css";
import { Footer } from "./Footer";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import FormComponent from "./asets/Userform";

const Contact = () => {
  return (
    <div className="Contact-main-container">
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <p style={{ textAlign: "center" }}>
        We would be happy to hear from you, please fill in the form below or
        mail us your requirements on
        <br />
        <span style={{ color: "red" }}>info@tecygig.com</span>
      </p>
      <Container>
        <Row className="form-cont">
          <Col lg={10} sm={12} className="shadow">
            <FormComponent />
          </Col>
        </Row>
      </Container>
      <br />
      <Container
        className="fresher-container-address"
        style={{
          backgroundColor: "#c3b7b78f",
          color: "black",
        }}
      >
        <h1 className="p-1  ">Mumbai Office</h1>
        <p className="p-2 fs-5">
          5 ,3A-Bwing Shradda Darshan Yeshwant Nagar Opp Shiv Sena Office Vakola{" "}
          <br />
          Santacruz East 400055 Mumbai
        </p>
        <p className="p-2 fs-5">
          Shop No.41/1 Khilji Mension, junction, near Kalpana Xerox, Kalina,
          Santacruz East,
          <br />
          Mumbai, Maharashtra 400029
        </p>
        <Button className="m-2" variant="success">
          +(91) 973-067-6430
        </Button>{" "}
        <Button className="m-2" variant="success">
          tecygig@gmail.com
        </Button>{" "}
        <Button className="m-2" variant="success">
          info@Tecygig.com
        </Button>{" "}
      </Container>
      <br />

      <Container>
        <Row>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120661.66769856802!2d72.78013728028301!3d19.07792879624895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c9dc3a5bc6ff%3A0xe39d670db3c02632!2sShop%20No.41%2F1%2C%20Khilji%20Mension%2C%20junction%2C%20near%20Kalpana%20Xerox%2C%20Kolivery%20Village%2C%20Kalina%2C%20Santacruz%20East%2C%20Mumbai%2C%20Maharashtra%20400029!3m2!1d19.0779471!2d72.862539!5e0!3m2!1sen!2sin!4v1699351889023!5m2!1sen!2sin"
              height="450"
              style={{ border: "0", width: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
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

export default Contact;

import React, { Component } from "react";
import "./styles/home.css";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import gif2 from "../Components/asets/home-pageImage/gif2.gif";
import Apps from "./Homepage-carausal/carausal-one/Apps";
import Apps2 from "./Homepage-carausal/carausal-two/Apps2";
import {
  FcBiotech,
  FcFrame,
  FcWorkflow,
  FcMultipleDevices,
  FcRating,
  FcShipped,
  FcVoicePresentation,
  FcPlus,
  FcGraduationCap,
  FcInTransit,
  FcGlobe,
  FcDepartment,
  FcCloseUpMode,
  FcEmptyFilter,
  FcInspection,
  FcOrgUnit,
} from "react-icons/fc";
import { Footer } from "./Footer";
import Chatboat from "./Chatboat";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Carousel className="shadow">
          <Carousel.Item>
            <img
              height={500}
              className="d-block w-100"
              src={gif2}
              alt="First slide"
            />
            <Carousel.Caption className="caption-crsal">
              <h1
                style={{
                  fontSize: "35",
                  color: "black",
                  textShadow: "4px 4px 6px rgba(0, 0, 0, .7)",
                }}
              >
                <b style={{ color: "red" }}>Web</b> development Company
              </h1>
              <p
                style={{
                  fontSize: "30px",
                  color: "black",
                  textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
                }}
              >
                <b style={{ color: "red" }}>#1</b> Ranked as #1 top Web
                development Company
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              height={500}
              className="d-block w-100"
              src={gif2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1
                style={{
                  fontSize: "35",
                  color: "black",
                  textShadow: "2px 4px 6px rgba(0, 0, 0, .7)",
                }}
              >
                <b style={{ color: "red" }}>Mobile App</b> development Company
              </h1>
              <p
                style={{
                  fontSize: "30px",
                  color: "black",
                  textShadow: "2px 4px 6px rgba(0, 0, 0, .7)",
                }}
              >
                <b style={{ color: "red" }}>#1</b> Ranked as #1 top App
                development Company
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={500}
              className="d-block w-100"
              src={gif2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1
                style={{
                  fontSize: "35",
                  color: "black",
                  textShadow: "2px 4px 6px rgba(0, 0, 0, .7)",
                }}
              >
                <b style={{ color: "red" }}>Blockchain</b> development Company
              </h1>
              <p
                style={{
                  fontSize: "30px",
                  color: "black",
                  textShadow: "2px 4px 6px rgba(0, 0, 0, .7)",
                }}
              >
                <b style={{ color: "red" }}>#1</b> Ranked as #1 top Blockchain
                development Company
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Add more Carousel.Item components for additional slides */}
        </Carousel>

        <Container className="mt-5">
          <Row className="border">
            <Col sm={6}>
              <h2>Tecygig</h2>
              <br />
              <p className="p-info">
                Because we deliver the best & we are unbeatable.
                <br />
                <br />
                Tecygig is a renowned mobile app development company & the best
                IT Software Solutions provider based in Mumbai,India,
                established in 2020.
                <br />
                <br />
                Tecygig is well known to craft the most innovative & eye catchy
                mobile apps & websites. We offer a wide range of customized
                services in mobile apps, website development, AR-VR Development,
                Game Development, Blockchain Development and much more. Our
                skilled team.
                <br />
                <br />
                We have dedicated and skilled human mind which will be doing Web
                development for you. Our aim is to give you, as customers,
                continuous support in developing and maintaining dedicated
                website carefully craft for your business enhancement
              </p>
              <h4>OFFICIAL PARTNER OF,</h4>
              <div className="flex-logo-div">
                <img
                  className="partner-com-logo"
                  src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/partner-salesforce.svg"
                />
                <img
                  className="partner-com-logo"
                  src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/partner-google.svg"
                />
                <img
                  className="partner-com-logo"
                  src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/partner-oracle.svg"
                />
                <img
                  className="partner-com-logo"
                  src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/partner-aws.svg"
                />
              </div>
            </Col>
            <Col sm={6}>
              <Row className="border">
                <Col sm={4} className="border year-info">
                  <img
                    className="p-3"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/ux.png"
                  />
                  <h2 className="fs-1 mt-2 ">11+</h2>
                  <p style={{ fontSize: "19px" }}>
                    Years Experience in Mobile App Design and Development
                  </p>
                </Col>
                <Col sm={4} className="border year-info">
                  <img
                    className="p-3"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/dating-app.png"
                  />
                  <h2 className="fs-1 mt-2 ">90+</h2>
                  <p style={{ fontSize: "19px" }}>Mobile Apps Developed</p>
                </Col>
                <Col sm={3} className="border year-info">
                  <img
                    className="p-3"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/data.png"
                  />
                  <h2 className="fs-1 mt-2 ">150+</h2>
                  <p style={{ fontSize: "19px" }}>Websites Developed</p>
                </Col>
                <Col sm={4} className="border year-info">
                  <img
                    className="p-3"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/customer-review.png"
                  />
                  <h2 className="fs-1 mt-2 ">4.9</h2>
                  <p style={{ fontSize: "19px" }}>Rating</p>
                </Col>
                <Col sm={4} className="border year-info">
                  <img
                    className="p-3"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/app-development-ab.png"
                  />
                  <h2 className="fs-1 mt-2 ">110</h2>
                  <p style={{ fontSize: "19px" }}>
                    App Downloads on App Stores (iOS + Android)
                  </p>
                </Col>
                <Col sm={3} className="border year-info">
                  <img
                    className="p-3"
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/web-development.png"
                  />
                  <h2 className="fs-1 mt-2 ">100+</h2>
                  <p style={{ fontSize: "19px" }}>
                    Dedicated Developers & Designers
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Apps />
        <Apps2 />

        <div className="container-process-follow">
          <h1 className="head-proces">Process We Follow</h1>
          <div className="flexx-process ">
            <div>
              <FcBiotech style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">1. Requirement Gathering</h5>
              <p className="fs-5 p-3">
                We follow the first and foremost priority of gathering
                requirements, resources, and information to begin our project.
              </p>
            </div>
            <div>
              <FcFrame style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">2. UI/UX Design</h5>
              <p className="fs-5 p-3">
                We create catchy and charming designs with the latest tools of
                designing to make it a best user-friendly experience.
              </p>
            </div>
            <div>
              <FcWorkflow style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">3. Prototype</h5>
              <p className="fs-5 p-3">
                After designing, you will get your prototype, which will be sent
                ahead for the development process for the product.
              </p>
            </div>
            <div>
              <FcMultipleDevices style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">4. Development</h5>
              <p className="fs-5 p-3">
                Development of mobile application/web/blockchain started using
                latest tools and technologies with transparency.
              </p>
            </div>
            <div>
              <FcRating style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">5. Quality Assurance</h5>
              <p className="fs-5 p-3">
                Hyperlink values quality and provides 100% bug free application
                with no compromisation in it.
              </p>
            </div>
            <div>
              <FcShipped style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">6. Deployment</h5>
              <p className="fs-5 p-3">
                After trial and following all processes, your app is ready to
                launch on the App store or Play Store.
              </p>
            </div>
            <div>
              <FcVoicePresentation
                style={{ fontSize: "70px", padding: "3px" }}
              />
              <h5 className="p-2 m-1">7. Support & Maintenance</h5>
              <p className="fs-5 p-3">
                Our company offers you all support and the team is always ready
                to answer every query after deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="container-industry-follow">
          <h1 className="head-industry">Industries We Serve</h1>
          <p style={{ textAlign: "center", marginTop: "-25px" }}>
            Here, we make almost every genre of applications. You name it and we
            build it.
          </p>
          <div className="flexx-industry">
            <div>
              <FcBiotech style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Retail, Ecommerce</h5>
            </div>
            <div>
              <FcGraduationCap style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Education & e-learning</h5>
            </div>
            <div>
              <FcPlus style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Healthcare & Fitness</h5>
            </div>
            <div>
              <FcInTransit style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Logistics & Distribution</h5>
            </div>
            <div>
              <FcGlobe style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Social Networking</h5>
            </div>
            <div>
              <FcDepartment style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Real Estate</h5>
            </div>
            <div>
              <FcCloseUpMode style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Travel & Hospitality</h5>
            </div>
            <div>
              <FcEmptyFilter style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Food & Restaurant</h5>
            </div>
            <div>
              <FcInspection style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">On-Demand Solutions</h5>
            </div>
            <div>
              <FcOrgUnit style={{ fontSize: "70px", padding: "3px" }} />
              <h5 className="p-2 m-1">Gaming</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid cont-work">
          <Container>
            <br />
            <Row className=" p-1">
              <Col sm={5} className="col-work">
                <h1>Who We Work With</h1>
                <p style={{ textAlign: "justify" }}>
                  Tecygig provides domains such as Software Development, Mobile
                  Application Development ,IOS Development, Website Development,
                  E- Commerce and Digital Marketing.We as a team are highly
                  motivated to provide best service to our customers at the
                  earliest. We are very flexible with our resources as per our
                  client needs
                </p>
              </Col>
              <Col sm={6}>
                <div className="flex-busines">
                  <div>
                    <FcBiotech style={{ fontSize: "70px", padding: "3px" }} />
                    <h5 className="p-2 m-1">Start Up Business</h5>
                  </div>
                  <div>
                    <FcBiotech style={{ fontSize: "70px", padding: "3px" }} />
                    <h5 className="p-2 m-1">Small & Medium Business</h5>
                  </div>
                  <div>
                    <FcBiotech style={{ fontSize: "70px", padding: "3px" }} />
                    <h5 className="p-2 m-1">Enterprise</h5>
                  </div>
                  <div>
                    <FcBiotech style={{ fontSize: "70px", padding: "3px" }} />
                    <h5 className="p-2 m-1">Agencies</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="container-industry-follow">
          <h1 className="head-industry">Glimpse Of Our Work And Presence</h1>
          <p style={{ textAlign: "center", marginTop: "-25px" }}>
            Here, we make almost every genre of applications. You name it and we
            build it.
          </p>
          <div className="flexx-workCount">
            <div>
              <h1 className="m-3">4500+</h1>
              <h5 className="p-2 m-1">Apps Developed</h5>
            </div>
            <div>
              <h1 className="m-3">4300+</h1>
              <h5 className="p-2 m-1">Website Designed</h5>
            </div>
            <div>
              <h1 className="m-3">2500+</h1>
              <h5 className="p-2 m-1">Happy Clients</h5>
            </div>
            <div>
              <h1 className="m-3">2000+</h1>
              <h5 className="p-2 m-1">Developers</h5>
            </div>
            <div>
              <h1 className="m-3">1500+</h1>
              <h5 className="p-2 m-1">AI & IoT Solutions</h5>
            </div>
            <div>
              <h1 className="m-3">3000+</h1>
              <h5 className="p-2 m-1">Games Developed</h5>
            </div>
            <div>
              <h1 className="m-3">4000+</h1>
              <h5 className="p-2 m-1">Salesforce Solutions</h5>
            </div>
            <div>
              <h1 className="m-3">5000+</h1>
              <h5 className="p-2 m-1">Data Science</h5>
            </div>
          </div>
        </div>

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
                window.location.href =
                  "https://in.pinterest.com/tecygig/_saved/";
              }}
            >
              <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tp-icon.svg" />
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

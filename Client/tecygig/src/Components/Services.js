import React, { Component } from "react";
import "./styles/Services.css";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Tab,
  Tabs,
} from "react-bootstrap";
import {
  FcBiotech,
  FcFrame,
  FcWorkflow,
  FcMultipleDevices,
  FcRating,
  FcShipped,
  FcVoicePresentation,
} from "react-icons/fc";
import { Footer } from "./Footer";

export default class Services extends Component {
  render() {
    return (
      <div className="Service-main-container">
        <div
          className="container-fluid mt-5"
          style={{ margin: "auto", width: "95%" }}
        >
          <Row className="border col-webdev">
            <Col lg={5} sm={6}>
              <h1 className="mt-4">Web Development Company</h1>
              <p className="mt-4 fs-5">
                A Roadmap To The Emerging And Effective Web And
                <br /> CMS Development
              </p>
              <Button>Get A Quote</Button>
            </Col>

            <Col sm={6} lg={7}>
              <img
                className="img-demo"
                src="https://www.hyperlinkinfosystem.com/assets/uploads/banner/1634022694.png"
              />
            </Col>
          </Row>
        </div>

        <div id="container">
          <div className="items">
            <img
              className="img-company-home"
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/sbs-discovery-media-hlis.png"
            />
          </div>
          <div className="items">
            <img
              className="img-company-home"
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/dhl.png"
            />
          </div>
          <div className="items">
            <img
              className="img-company-home"
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/npci-hlis.png"
            />
          </div>
          <div className="items">
            <img
              className="img-company-home"
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tata-motors-hlis.png"
            />
          </div>
          <div className="items">
            <img
              className="img-company-home"
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/astral-hlis.png"
            />
          </div>
          <div className="items">
            <img
              style={{ height: "90%", margin: "5px", padding: "5px" }}
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/zydus-logo.png"
            />
          </div>
          <div className="items">
            <img
              style={{ height: "90%", margin: "5px", padding: "5px" }}
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/zydus-logo.png"
            />
          </div>
          <div className="items">
            <img
              className="img-company-home"
              height={90}
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/zydus-logo.png"
            />
          </div>
          <div className="items">
            <img
              className="img-company-home"
              height={90}
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/zydus-logo.png"
            />
          </div>
          <div className="items">
            <img
              className="img-company-home"
              height={90}
              src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/zydus-logo.png"
            />
          </div>
        </div>

        <Container>
          <h2 className="mt-5 p-2 f ">Why Choose Hyperlink InfoSystem</h2>
          <h3 className="m-1 p-2">A Few Good Reasons:</h3>
          <p className="m-2 fs-5">
            Our team holds knowledge in completing the projected goals and makes
            it possible to mold the ideas as per the market demands. We do not
            just make a website; we design a platform that takes your business
            to another level. Our front-end designers blend the expertise,
            innovation & technology to design a masterpiece for you. Client
            satisfaction is what matters the most for us at Hyperlink
            InfoSystem.
          </p>
          <ul className="m-2 fs-5">
            <li> Higher ROI</li>
            <li>Scalable and Reliable</li>
            <li>Easy To Use</li>
            <li>Shorten Risks</li>
            <li>Ease Access</li>
          </ul>
        </Container>

        <h1 className="mt-4" style={{ textAlign: "center" }}>
          Technologies We Work On
        </h1>
        <Container>
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="Mobile">
              <div id="container-technology">
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/android.svg"
                  />
                  <p>Android</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/apple-icon.svg"
                  />
                  <p>iOS</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/flutter.svg"
                  />
                  <p>Flutter</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/react-native.svg"
                  />
                  <p>React-Native</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/kotlin.svg"
                  />
                  <p>Kotlin</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/ionic.svg"
                  />
                  <p>Ionic</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/swift-icon.svg"
                  />
                  <p>Swift</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/xamarin.svg"
                  />
                  <p>Xamarin</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/ipad.svg"
                  />
                  <p>i-Pad</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/windows.svg"
                  />
                  <p>Windows</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/phonegap.svg"
                  />
                  <p>PhoneGap</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/augment-reality.svg"
                  />
                  <p>Augmented Reality</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Frontent">
              <div id="container-technology">
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/senchatouch.svg"
                  />
                  <p>Senchatouch</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/typescript.svg"
                  />
                  <p>Typescript</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/angular.svg"
                  />
                  <p>Angular JS</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/golang.svg"
                  />
                  <p>Golang</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/javascript.svg"
                  />
                  <p>JavaScript</p>
                </div>

                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/react-js.svg"
                  />
                  <p>React JS</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Backend">
              <div id="container-technology">
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/php.svg"
                  />
                  <p>PHP</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/yii.svg"
                  />
                  <p>Yii</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/cakephp.svg"
                  />
                  <p>CakePHP</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/java.svg"
                  />
                  <p>Java</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/windows-dotnet.svg"
                  />
                  <p>Windows DotNet</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/csharp.svg"
                  />
                  <p>C Sharp</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/ruby-on-rails.svg"
                  />
                  <p>Ruby on Rails</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/codeigniter.svg"
                  />
                  <p>CodeIgniter</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/python.svg"
                  />
                  <p>Python</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/laravel.svg"
                  />
                  <p>Laravel</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/scala.svg"
                  />
                  <p>Scala</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/nodejs.svg"
                  />
                  <p>NodeJs</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="CMS">
              <div id="container-technology">
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/wordpress-icon.svg"
                  />
                  <p>WordPress</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/magento.svg"
                  />
                  <p>Magento</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/prestashop.svg"
                  />
                  <p>Prestashop</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/joomla.svg"
                  />
                  <p>Joomla</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/bigcommerce.svg"
                  />
                  <p>BigCommerce</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/drupal.svg"
                  />
                  <p>Drupal</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/ubercart.svg"
                  />
                  <p>Uberchart</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/virtuemart.svg"
                  />
                  <p>Virtuemart</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/cs-cart.svg"
                  />
                  <p>CS Cart</p>
                </div>
                <div className="items-technology">
                  <img
                    style={{ height: "70%", margin: "5px", padding: "5px" }}
                    src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/sitecore.svg"
                  />
                  <p>Sitecore</p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Container>

        <div className="container-process-follow">
          <h1 className="head-proces mt-5">Process We Follow</h1>
          <p className="head-proces fs-4 ">
            How Our Experts Handle The Project Efficiently,
          </p>
          <div className="flexx-process">
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

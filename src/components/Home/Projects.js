import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Project.css";
import Logo from "../../assets/img/CDM logo.png";
import Brochures from "../../assets/img/Rup Brochure.png";
import BusinessCard from "../../assets/img/Business Card.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import Flyers from "../../assets/img/SOM flyers.png";
import Leaterhead from "../../assets/img/RUP Letterhead.png";
import combines from "../../assets/img/RUP combine.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import cdm from "../../assets/img/logos/CDM logo.png";
import crystal from "../../assets/img/logos/Crystal ahrine.png";
import SOM from "../../assets/img/logos/SOM.png";
import Speaking from "../../assets/img/logos/Speaking Bricks.png";
import comtech from "../../assets/img/logos/comtech.png";
import ComtechBusinessCard from "../../assets/img/Business card/Comtech Business Card.png"
import Lightanddecor from "../../assets/img/Business card/Light and decor business-card.png"
import SOMBusnessCard from "../../assets/img/Business card/SOM.png"
import StudioLineBusinessCard from "../../assets/img/Business card/Studio line.png"
import fifteabusinesscard from "../../assets/img/Business card/fiftea business card.png"

import Lightsanddecor from "../../assets/img/Brochure/Lights and decor.png"
import Lightsanddecor2 from "../../assets/img/Brochure/Lights and Decor 2.png"
import Rup1 from "../../assets/img/Brochure/RUP brochure 2.png"
import Rup2 from "../../assets/img/Brochure/Rup Brochure.png";

import Accuspiralsflyers from "../../assets/img/Flyers/Accuspirals flyers.png";
import Lights_decorFlyer from "../../assets/img/Flyers/Lights _ decor Flyer.png";
import PropertySaleFlyer from "../../assets/img/Flyers/Property Sale Flyer.png";
import RUPFlyer from "../../assets/img/Flyers/RUP.png";
import SOMflyers from "../../assets/img/Flyers/SOM flyers.png";
import UrbanDesk from "../../assets/img/Flyers/Urban Desk.png";

import CarclassicLetterHead from "../../assets/img/Letterheads/Carclassic.png";
import CDMLetterHead from "../../assets/img/Letterheads/CDM Letterhead.png";
import ComtecLetterHead from "../../assets/img/Letterheads/Comtec Letterhead.png";
import Light_decorLetterHead from "../../assets/img/Letterheads/Light _ decor letterhead.png";
import RUPLetterHead from "../../assets/img/Letterheads/RUP Letterhead.png";
import SOMLetterHead from "../../assets/img/Letterheads/SOM Letterhead.png";

import ComtechCombines from "../../assets/img/Combines/Comtech.png";
import Lights_decorCombines from "../../assets/img/Combines/Lights _ decor.png";
import RUPCombines from "../../assets/img/Combines/RUP.png";
import SOMCombines from "../../assets/img/Combines/SOM letterhead _ business.png";















export const Projects = () => {
  const projects = [
    {
      title: "Logo",
      description: "Click to know more",
      imgUrl: Logo,
      Popupdisplay: [cdm, crystal, SOM, Speaking, comtech]
    },
    {
      title: "Business Cards",
      description: "Click to know more",
      imgUrl: BusinessCard,
      Popupdisplay: [,BusinessCard,Lightanddecor,SOMBusnessCard, StudioLineBusinessCard,ComtechBusinessCard, fifteabusinesscard]
    },
    {
      title: "Brochures",
      description: "Click to know more",
      imgUrl: Brochures,
      Popupdisplay: [Rup1, Rup2 , Lightsanddecor,Lightsanddecor2,PropertySaleFlyer, RUPFlyer,SOMflyers,UrbanDesk]
    },
    {
      title: "Flyers",
      description: "Click to know more",
      imgUrl: Flyers,
      Popupdisplay: [Accuspiralsflyers,Lights_decorFlyer,PropertySaleFlyer,RUPFlyer,SOMflyers,UrbanDesk]
    },
    {
      title: "Leaterhead",
      description: "Click to know more",
      imgUrl: Leaterhead,
      Popupdisplay: [CarclassicLetterHead,CDMLetterHead,ComtecLetterHead,Light_decorLetterHead,RUPLetterHead,SOMLetterHead]
    },
    {
      title: "Combines",
      description: "Click to know more",
      imgUrl: combines,
      Popupdisplay: [ComtechCombines,Lights_decorCombines,RUPCombines,SOMCombines]
    },
  ];

  return (
    <section className="project" id="project">
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                  <h2>Portfolio</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="nav-link-mobile">Branding</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="nav-link-mobile">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="nav-link-mobile">Social Media</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={`animate__animated ${isVisible ? "animate__slideInUp" : ""}`}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
}

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
      Popupdisplay: [cdm, crystal, SOM, Speaking, comtech]
    },
    {
      title: "Brochures",
      description: "Click to know more",
      imgUrl: Brochures,
      Popupdisplay: [cdm, crystal, SOM, Speaking, comtech]
    },
    {
      title: "Flyers",
      description: "Click to know more",
      imgUrl: Flyers,
      Popupdisplay: [cdm, crystal, SOM, Speaking, comtech]
    },
    {
      title: "Leaterhead",
      description: "Click to know more",
      imgUrl: Leaterhead,
      Popupdisplay: [cdm, crystal, SOM, Speaking, comtech]
    },
    {
      title: "Combines",
      description: "Click to know more",
      imgUrl: combines,
      Popupdisplay: [cdm, crystal, SOM, Speaking, comtech]
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

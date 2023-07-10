import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Project.css";
import Logo from "../../assets/img/CDM logo.jpg";
import Brochures from "../../assets/img/Rup Brochure.jpg";
import BusinessCard from "../../assets/img/Business Card.jpg";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import Flyers from "../../assets/img/SOM flyers.jpg";
import Leaterhead from "../../assets/img/RUP Letterhead.jpg";
import combines from "../../assets/img/RUP combine.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import cdm from "../../assets/img/logos/CDM logo.png";
import crystal from "../../assets/img/logos/Crystal ahrine.png";
import SOM from "../../assets/img/logos/SOM.png";
import Speaking from "../../assets/img/logos/Speaking Bricks.png";
import comtech from "../../assets/img/logos/comtech.png";

import ShaliniMukund from "../../assets/img/Business card/ShaliniMukund.png"
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

import CDMSOcial4 from "../../assets/img/Social Media Posters/CDM/Poster4-CDM.png"
import CDMSOcial1 from "../../assets/img/Social Media Posters/CDM/Poster1-CDM.png"
import CDMSOcial2 from "../../assets/img/Social Media Posters/CDM/Poster2-CDM.png"
import CDMSOcial3 from "../../assets/img/Social Media Posters/CDM/Poster3-CDM.png"
import CDMSOcial5 from "../../assets/img/Social Media Posters/CDM/Poster5-CDM.png"
import CDMSOcial6 from "../../assets/img/Social Media Posters/CDM/Poster6-CDM.png"
import CDMSOcial7 from "../../assets/img/Social Media Posters/CDM/Poster7-CDM.png"
import CDMSOcial8 from "../../assets/img/Social Media Posters/CDM/Poster8-CDM.png"
import CDMSOcial9 from "../../assets/img/Social Media Posters/CDM/Poster9-CDM.png"
import CDMSOcial10 from "../../assets/img/Social Media Posters/CDM/Poster10-CDM.png"
import CDMSOcial11 from "../../assets/img/Social Media Posters/CDM/Poster11-CDM.png"
import CDM from "../../assets/img/Social Media Post/CDM.png"

import VOM from "../../assets/img/Social Media Post/Voice o magic Social media post.png"
import Poster1 from "../../assets/img/Social Media Posters/Voice o magic/Poster13-Jan-SM.png"
import Poster2 from "../../assets/img/Social Media Posters/Voice o magic/Poster20-Jan-SM.png"
import Poster3 from "../../assets/img/Social Media Posters/Voice o magic/Poster13-Jan-SM.png"
import Poster4 from "../../assets/img/Social Media Posters/Voice o magic/Poster13-Jan-SM.png"
import Poster5 from "../../assets/img/Social Media Posters/Voice o magic/Poster13-Jan-SM.png"



import SOMFestivals from "../../assets/img/Social Media Post/SOM Festivals.png"
import a from "../../assets/img/Social Media Posters/Festival Posters/a.jpg"
import b from "../../assets/img/Social Media Posters/Festival Posters/b.png"
import c from "../../assets/img/Social Media Posters/Festival Posters/c.png"
import d from "../../assets/img/Social Media Posters/Festival Posters/d.png"
import f from "../../assets/img/Social Media Posters/Festival Posters/f.png"
import h from "../../assets/img/Social Media Posters/Festival Posters/h.png"
import k from "../../assets/img/Social Media Posters/Festival Posters/k.png"
import l from "../../assets/img/Social Media Posters/Festival Posters/l.png"
import m from "../../assets/img/Social Media Posters/Festival Posters/m.png"
import n from "../../assets/img/Social Media Posters/Festival Posters/n.png"
import s from "../../assets/img/Social Media Posters/Festival Posters/s.png"
import v from "../../assets/img/Social Media Posters/Festival Posters/v.png"
import x from "../../assets/img/Social Media Posters/Festival Posters/x.png"
import z from "../../assets/img/Social Media Posters/Festival Posters/z.png"














export const Projects = () => {
  const projects = [
    {
      title: "Logo",
      description: "Click to know more",
      imgUrl: Logo,
      Popupdisplay: [cdm, crystal, SOM, Speaking, comtech],
      Company: ["CREATIVE DIGITAL MEDIA", "CRYSTAL AHTINE", "SCHOOL OF MASTERS", "SPEAKING BRICKS", "COMTECH"]
    },
    {
      title: "Business Cards",
      description: "Click to know more",
      imgUrl: BusinessCard,
      Popupdisplay: [ShaliniMukund,Lightanddecor,SOMBusnessCard, StudioLineBusinessCard,ComtechBusinessCard, fifteabusinesscard],
      Company: ["SHALINI MUKUND", "LIGHT AND DECOR", "SCHOOL OF MASTERS", "STUDIO LINE2", "COMTECH", "FIFTEA"]
    },
    {
      title: "Brochures",
      description: "Click to know more",
      imgUrl: Brochures,
      Popupdisplay: [Rup1, Rup2 , Lightsanddecor,Lightsanddecor2,],
      Company: ["RUP RUBBER ENTERPRISE", "RUP RUBBER ENTERPRISE", "LIGHT AND DECOR", "LIGHT AND DECOR"]
    },
    {
      title: "Flyers",
      description: "Click to know more",
      imgUrl: Flyers,
      Popupdisplay: [Accuspiralsflyers,Lights_decorFlyer,PropertySaleFlyer,RUPFlyer,SOMflyers,UrbanDesk],
      Company: ["ACCUSPIRALS", "LIGHT AND DECOR", "PROPERTYSALE", "RUP RUBBER ENTERPRISE", "SCHOOL OF MASTERS", "URBANDESK"]
    },
    {
      title: "Letterhead",
      description: "Click to know more",
      imgUrl: Leaterhead,
      Popupdisplay: [CarclassicLetterHead,CDMLetterHead,ComtecLetterHead,Light_decorLetterHead,RUPLetterHead,SOMLetterHead],
      Company: ["CARCLASSIC", "CREATIVE DIGITAL MEDIA", "COMTEC", "LIGHT AND DECOR", "RUP RUBBER ENTERPRISE", "SCHOOL OF MASTERS"]
    },
    {
      title: "Collaterals ",
      description: "Click to know more",
      imgUrl: combines,
      Popupdisplay: [ComtechCombines,Lights_decorCombines,RUPCombines,SOMCombines],
      Company: ["COMTECH", "LIGHT AND DECOR", "RUP RUBBER ENTERPRISE", "SPEAKING BRICKS", "SCHOOL OF MASTERS"]
    },
  ];

  const websites = [
    {
      title : "School of masters",
      description: "Click to knoe more",
      Popupdisplay: [ComtechCombines,Lights_decorCombines,RUPCombines,SOMCombines],
      Company: ["COMTECH", "LIGHT AND DECOR", "RUP RUBBER ENTERPRISE", "SPEAKING BRICKS", "SCHOOL OF MASTERS"]
    }
  ];
  const social = [
    {
      title: "Creative Digital Media",
      description : "Click to know more",
      imgUrl: CDM,
      Popupdisplay: [CDMSOcial1,CDMSOcial2,CDMSOcial3,CDMSOcial4,CDMSOcial5,CDMSOcial6,CDMSOcial7,CDMSOcial8,CDMSOcial9,CDMSOcial10,CDMSOcial11],
      Company: ["Social Media", "Data Deiven Marketing", "Search Engine Optimization", "Creative Digital Media ", "Content is King","Creative Digital Media", "Marketing Automation","Email Marketing"," Creative Digital Media", "Creative Digital Media","Creative Digital Media" ]
    },
    {
      title: "Client",
      description : "Click to know more",
      imgUrl: VOM,
      Popupdisplay: [Poster1,Poster2,Poster3,Poster4,Poster5],
      Company: ["VOICEOMAGIC", "","VOICEOMAGIC" ,"VOICEOMAGIC", "VOICEOMAGIC", "  VOICEOMAGIC"]
    },{
      title: "Festivals",
      description : "Click to know more",
      imgUrl: SOMFestivals,
      Popupdisplay: [a,b,c,d,f,h,k,l,m,n,s,v,x,z],
      Company: ["DIWALI", "YOGA DAY", "BAISAKHI", "EASTER", "EASTER","ENVIRONMENT DAY","GOOD FRIDAY","GOOD FRIDAY","YOGA DAY","YOGA DAY","EASTER","BAISAKHI","HALLOWEEN","GOOD FRIDAY"]
    }

  ]
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
                      <Row className="justify-content-center">
                          {websites.map((website, index) => (
                            <ProjectCard
                              key={index}
                              {...website}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                          {social.map((posts, index) => (
                            <ProjectCard
                              key={index}
                              {...posts}
                            />
                          ))}
                        </Row>                      </Tab.Pane>
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

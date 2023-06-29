import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./PortfolioCard";
import "./Portfolio.css"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Portfolio = () => {
  const pageStyle = {
    background: '#1a0537',
    color: 'white',
    minHeight: '150vh', 
  };

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <div style={pageStyle}>
    
  <section className="project" id="project">
  <Container fluid
    style={{
      width: "100%",
    }}
  >
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                <br></br>
              <h2>Portfolio</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
    <Nav.Item className="mb-3 mb-md-0">
      <Nav.Link eventKey="first" className="nav-link-mobile">Branding</Nav.Link>
    </Nav.Item>
    <div className="w-100 d-md-none"></div> {/* Add a div to create a line break */}
    <Nav.Item className="mb-3 mb-md-0">
      <Nav.Link eventKey="second" className="nav-link-mobile">Web Development</Nav.Link>
    </Nav.Item>
    <div className="w-100 d-md-none"></div> {/* Add a div to create a line break */}
    <Nav.Item className="mb-3 mb-md-0">
      <Nav.Link eventKey="third" className="nav-link-mobile">Social Media</Nav.Link>
    </Nav.Item>
  </Nav>
                <Tab.Content id="slideInUp" className={`animate__animated ${isVisible ? "animate__slideInUp" : ""}`}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
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



      
      <br></br>
    </div>
  );
};

export default Portfolio;

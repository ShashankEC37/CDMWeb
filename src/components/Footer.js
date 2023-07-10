import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const senderEmail = 'param@creativedigitalmedia.co.in';
  const emailSubject = 'Hello Creative Digital Media!'; // Optional: You can set a default email subject

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(emailSubject)}`;
    window.location.href = mailtoLink;
  };
  return (
  
   <footer>
  <Container fluid>
    <Row className="align-items-end text-left"> {/* Added text-left class */}
      <Col sm={12} md={4} lg={4} className="mb-3 mb-md-0">
        <img src={logo} alt="Logo" style={{ width: '130px' }} />
        <h5>Address</h5>
        <p>#73, 3rd Floor, Shreelekha Complex, WOC, Mahalakshmipuram, Bengaluru, Karnataka 560086</p>
      </Col>

      <Col sm={12} md={4} lg={4} className="mb-3 mb-md-0" >
        <br />
        <h5 style = {{paddingLeft:"100px"}}>Quick Links</h5>
        <h6 style = {{paddingLeft:"100px"}}><a href="/" style={{ color: "white" }}>Home</a></h6>
        <h6 style = {{paddingLeft:"100px"}}><a href="/services" style={{ color: "white" }}>Services</a></h6>
        <h6 style = {{paddingLeft:"100px"}}><a href="/portfolio" style={{ color: "white" }}>Portfolio</a></h6>
        <h6 style = {{paddingLeft:"100px"}}><a href="/about" style={{ color: "white" }}>About</a></h6>
      </Col>

      <Col sm={12} md={4} lg={4} className="text-md-center">
        <h5>Contact us</h5>
        <h5>+91 7259561303</h5>
        <h5>
          <span
            onClick={handleEmailClick}
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            param@creativedigitalmedia.co.in
          </span>
        </h5>
        <div className="social-icon d-flex text-left justify-content-center align-items-left">
          <a href="https://www.linkedin.com/company/creativedigitalmedia/"><img src={navIcon1} alt="LinkedIn" /></a>
          <a href="https://www.facebook.com/ParamCDM"><img src={navIcon2} alt="Facebook" /></a>
          <a href="https://www.instagram.com/creativedigitalmedia2022/"><img src={navIcon3} alt="Instagram" /></a>
        </div>
        <p className="text-center">&copy; 2023. All Rights Reserved</p>
      </Col>
    </Row>
  </Container>


  </footer>

  )
}

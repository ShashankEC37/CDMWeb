import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Whatsapp from "../assets/img/Whatsapp.png";

export const Footer = () => {
  const senderEmail = 'param@creativedigitalmedia.co.in';
  const emailSubject = 'Hello Creative Digital Media!'; // Optional: You can set a default email subject

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(emailSubject)}`;
    window.location.href = mailtoLink;
  };

  const handleClick = () => {
    const phoneNumber = '+91 7259561303'; // Replace with your phone number
    const message = 'Hey can i know more about your services.'; // Replace with your default message
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  return (
  
   <footer>
  <Container fluid>
  <Row className="align-items-end text-left">
  <Col xs={12} sm={6} md={3} lg={3} className="mb-4 mb-md-0">
    <img src={logo} alt="Logo" style={{width: '130px' ,paddingBottom:"100px" }} />
  </Col>

  <Col xs={12} sm={6} md={3} lg={3} className="mb-4 mb-md-0">
    <br />
    <h5>Quick Links</h5>
    <h6><a href="/" style={{ color: "white" }}>Home</a></h6>
    <h6><a href="/services" style={{ color: "white" }}>Services</a></h6>
    <h6><a href="/portfolio" style={{ color: "white" }}>Portfolio</a></h6>
    <h6><a href="/about" style={{ color: "white" }}>About</a></h6>
  </Col>

  <Col xs={12} sm={6} md={3} lg={3} className="mb-4 mb-md-0 text-center">
  
  <h5>Contact us</h5>
  <img
    src={Whatsapp}
    alt="Whatsapp"
    style={{ width: '40px', height: '40px', animation: 'zoom', cursor: 'pointer' }}
    onClick={handleClick}
  />
  <h5>+91 7259561303</h5>
  <h5>
    <a
      onClick={handleEmailClick}
      style={{ textDecoration: 'underline', cursor: 'pointer' }}
    >
      param@creativedigitalmedia.co.in
    </a>
  </h5>
</Col>

  <Col xs={12} sm={6} md={3} lg={3} className="mb-4 mb-md-0">
    <div className="social-icon d-flex justify-content-center">
      <a href="https://www.linkedin.com/company/creativedigitalmedia/"><img src={navIcon1} alt="LinkedIn" /></a>
    </div>
    <div className="social-icon d-flex justify-content-center">
      <a href="https://www.facebook.com/ParamCDM"><img src={navIcon2} alt="Facebook" /></a>
    </div>
    <div className="social-icon d-flex justify-content-center">
      <a href="https://www.instagram.com/creativedigitalmedia2022/"><img src={navIcon3} alt="Instagram" /></a>
    </div>
    <p className="social-icon d-flex justify-content-center">&copy; 2023. All Rights Reserved</p>
  </Col>
</Row>

  </Container>


  </footer>

  )
}

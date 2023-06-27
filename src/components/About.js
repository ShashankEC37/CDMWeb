import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file for styling
import mission from "../assets/img/mission.png"
import values from "../assets/img/values.png"
import vision from "../assets/img/vision.png"
import success from "../assets/img/Success.png"
import partnership from "../assets/img/partnership.png";

const About = () => {
  const pageStyle = {
    background: '#1a0537',
    color: 'white',
    minHeight: '150vh', 
  };

  return (
    <div style={pageStyle}>
      <Container className="about-container">
  <div className="tagline">
    <h1 className="tagline">
      <strong>Empowering Digital Success Through Innovative Solutions</strong>
    </h1>
  </div>
</Container>

      <Container className="about-container2 animate-slide-up">
        <div className="section1" style={{ backgroundColor: 'white', padding: '30px', color: 'white', borderRadius: '10px' }}>
          <h1 className="title">About</h1>
        
          <div className="mission-item" >
                <h4>Established in August 2022, Creative Digital Media is a leading full-service digital marketing company. We excel in providing comprehensive back-end tech support to empower organizations in their digital marketing endeavors. Our unwavering mission is to deliver unparalleled services, enabling our clients to achieve exceptional results in the ever-evolving digital landscape. With a fusion of creativity and cutting-edge technology, we offer a diverse range of solutions, including social media management, website design and development, video production, and much more. Guided by our core values of integrity, accountability, timely delivery, and honesty, we strive to build enduring partnerships based on trust and transparency. Our visionary approach aims to become a global leader, alleviating organizational stress through seamless and innovative digital solutions, while continuously evolving to meet our clients' dynamic needs.</h4>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={partnership} alt="Partnership" style={{ width: '150px' }} />
                  <img src={success} alt="Success" style={{ width: '150px' }} />
                </div>
              </div>
            </div>
      </Container>
      <Container className="about-container2 animate-slide-up">
  <div className="section1" style={{ backgroundColor: 'white', padding: '10px', color: 'black', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1 }}>
      <img src={vision} alt="Vision" style={{ width: '70%' }} />
    </div>
    <div style={{ flex: 1 }}>
      <h1 className="vision" style={{ fontWeight: 'bold', fontFamily: 'Your Superior Font', fontSize: '60px' }}><strong>Vision</strong></h1>
      <h4>
        Shaping digital success worldwide through innovative strategies, expert guidance, and trusted partnerships.
      </h4>
    </div>
  </div>
</Container>

<Container className="about-container2">
  <div className="section1" style={{ backgroundColor: 'white', padding: '20px', color: 'white', borderRadius: '10px', width: '100%' }}>
    <h1 className="vision" style={{ fontWeight: 'bold', fontFamily: 'Your Superior Font', fontSize: '60px' }}><strong>Mission</strong></h1>
    <img src={mission} alt="Mission" style={{ float: 'right', width: '200px' }} />
    <div className="mission-item">
      <div>
        <h3><strong>Delivering excellence</strong></h3>
      </div>
    </div>
    <div className="mission-item">
      <h3><strong>Tailored solutions for success</strong></h3>
    </div>
    <div className="mission-item">
      <h3><strong>Building enduring partnerships</strong></h3>
    </div>
    <div className="mission-item">
      <h3><strong>Global leader in comprehensive solutions</strong></h3>
    </div>
    <div className="mission-item">
      <h3><strong>Continuous innovation and evolution</strong></h3>
    </div>
  </div>
</Container>

      <Container className="about-container2" >

      <div className="section1" style={{ backgroundColor: 'white', padding: '20px', color: 'white', borderRadius: '10px', width: '100%' }}>
          <div className="values">
          <img src={values} alt="Values" style={{ float: 'right', width: '200px' }} />
        <h1 className="vision" style={{ fontWeight: 'bold', fontFamily: 'Your Superior Font', fontSize: '60px' }}><strong>Values</strong></h1>
            
            
            <div className="mission-item" >
  <h3><strong>Integrity</strong></h3>
  
</div>
<div className="mission-item" >
  <h3><strong>Accountability</strong></h3>
  
</div>
<div className="mission-item" >
  <h3><strong>Timely Delivery</strong></h3>
  
</div>
<div className="mission-item" >
  <h3><strong>Honesty</strong></h3>
  
</div>
<div className="mission-item" >
  <h3><strong>Continuous Improvement</strong></h3>
  
</div>

          </div>
        </div>
      </Container>
      
      <br></br>
    </div>
  );
};

export default About;

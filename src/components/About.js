import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file for styling
import mission from "../assets/img/mission.png"
import values from "../assets/img/values.png"
import vision from "../assets/img/vision.png"
import success from "../assets/img/Success.png"
import partnership from "../assets/img/partnership.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  offset: 120,
  duration: 1000,
});
const About = () => {
  const pageStyle = {
    background: '#1a0537',
    color: 'white',
    minHeight: '150vh', 
  };

  return (
    <div style={pageStyle}>
  
      <Container fluid className="about-container2" data-aos="zoom-in-down">
  <div className="tagline">
    <h1 className="tagline">
      <strong>Empowering Digital Success Through Innovative Solutions</strong>
    </h1>
  </div>
</Container>

      <Container fluid className="about-container2 " data-aos="fade-up" >
        <div className="section1" style={{ backgroundColor: 'white', padding: '30px', color: 'white', borderRadius: '10px' }}>
        <div className="values">
    <div> <h1 className="vision" style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '20px' }}><strong>About</strong></h1>
 </div>
        
 <div className="About" style={{ textAlign: 'justify' }}>
 <h4 style={{ textAlign: 'justify', fontSize: '25px' }}>
  Established in August 2022, Creative Digital Media is a leading full-service digital marketing company. We excel in providing comprehensive back-end tech support to empower organizations in their digital marketing endeavors. Our unwavering mission is to deliver unparalleled services, enabling our clients to achieve exceptional results in the ever-evolving digital landscape. With a fusion of creativity and cutting-edge technology, we offer a diverse range of solutions, including social media management, website design and development, video production, and much more. Guided by our core values of integrity, accountability, timely delivery, and honesty, we strive to build enduring partnerships based on trust and transparency. Our visionary approach aims to become a global leader, alleviating organizational stress through seamless and innovative digital solutions, while continuously evolving to meet our clients' dynamic needs.
</h4>



                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={partnership} alt="Partnership" style={{ width: '150px' }} />
                  <img src={success} alt="Success" style={{ width: '150px' }} />
                </div>
              </div>
              </div>
            </div>
      </Container>
      <Container fluid className="about-container2 " data-aos="fade-in">
  <div className="section1" style={{ backgroundColor: 'white', padding: '10px', color: 'black', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1 }} data-aos="fade-right">
      <img src={vision} alt="Vision" style={{ width: '70%' }} />
    </div>
    <div style={{ flex: 1 }}>
      <h1 className="vision"  style={{ fontWeight: 'bold', fontSize: '30px' }}><strong>Vision</strong></h1>
      <h4 class="custom-heading" data-aos="fade-left">
      Shaping digital success worldwide through innovative strategies, expert guidance, and trusted partnerships.
    </h4>
    </div>
  </div>
</Container>

<Container fluid className="about-container2" data-aos="fade-in">
  <div className="section1" style={{ backgroundColor: 'white', padding: '10px', color: 'white', borderRadius: '10px', width: '100%', display: 'flex', alignItems: 'center' }}>
  <div className="values">
    <div> <h1 className="vision" style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '20px' }}><strong>Mission</strong></h1>
 </div>
 <div className="values-image" data-aos="fade-left">
  <img
    src={mission}
    alt="Values"
    style={{
      float: 'right',
      width: '200px',
      maxWidth: '50%', // Add this line to ensure the image doesn't exceed its container
    }}
  />
</div>
    <div className="mission-items" style={{ flex: 1 }}data-aos="fade-right">
      
      <div className="mission-item">
        <h3><strong>Delivering excellence</strong></h3>
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
    </div>
  
  </div>
</Container>

<Container fluid className="about-container2" data-aos="fade-in">
  <div className="section1" style={{ backgroundColor: 'white', padding: '10px', color: 'white', borderRadius: '10px', width: '100%', display: 'flex', alignItems: 'center' }}>
  <div className="values">
    <div> <h1 className="vision" style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '20px' }}><strong>Values</strong></h1>
 </div>
 <div className="values-image" data-aos="fade-right">
  <img 
    src={values}
    alt="Values"
    style={{
      float: 'left',
      width: '200px',
      maxWidth: '40%', // Add this line to ensure the image doesn't exceed its container
    }} 
  />
</div>
    <div className="mission2-items" style={{ flex: 1 }} data-aos="fade-left">
      
      <div className="mission2-item">
        <h3><strong>Integrity</strong></h3>
      </div>
      <div className="mission2-item">
        <h3><strong>Accountability</strong></h3>
      </div>
      <div className="mission2-item">
        <h3><strong>Timely Delivery</strong></h3>
      </div>
      <div className="mission2-item">
        <h3><strong>Perfection </strong></h3>
      </div>
      <div className="mission2-item">
        <h3><strong>Honesty</strong></h3>
      </div>
      </div>
    </div>
  
  </div>
</Container>



      
      <br></br>
    </div>
  );
};

export default About;

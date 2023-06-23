import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file for styling
import mission from "../assets/img/mission.png"
import values from "../assets/img/values.png"
import vision from "../assets/img/vision.png"
import success from "../assets/img/Success.png"
import partnership from "../assets/img/partnership.png"

const About = () => {
  const pageStyle = {
    background: '#1a0537',
    color: 'white',
    minHeight: '150vh', 
  };

  return (
    <div style={pageStyle}>
      <Container className="about-container1">
        <div className="tagline">
          <h1 className="tagline"><strong>Empowering Digital Success Through Innovative Solutions</strong></h1>
        </div>
      </Container>
      <Container className="about-container">
        <div className="vision">
          <img src={vision} alt="Vision" style={{ float: 'right', width: '200px' }} />
          <h1 className="vision" style={{ fontWeight: 'bold', fontFamily: 'Your Superior Font', fontSize: '60px' }}><strong>Vision</strong></h1>
          <h1>
            Shaping digital success worldwide through innovative strategies, expert guidance, and trusted partnerships.
          </h1>
        </div>
      </Container>
      <Container className="about-container" style={{ width: '50%' }}>
        <div className="section1" style={{ backgroundColor: 'white', padding: '20px', color: 'white' }}>
          <h1 className="title">Mission</h1>
          <img src={mission} alt="Mission" style={{ float: 'right', width: '200px' }} />
          <div className="mission-item">
            <div>
              <h3><strong>Delivering excellence:</strong></h3>
              <h4>We strive to provide our clients with the best possible digital marketing experience, from strategy to execution, ensuring exceptional quality and results.</h4>
            </div>
          </div>
          <div className="mission-item">
            <h3><strong>Tailored solutions for success:</strong></h3>
            <h4>We empower businesses to thrive in the digital world by delivering innovative and effective solutions tailored to their unique needs and goals.</h4>
          </div>
          <div className="mission-item">
            <h3><strong>Building enduring partnerships:</strong></h3>
            <h4>We work tirelessly to build long-lasting relationships with our clients, earning their trust as their trusted partner in achieving their digital marketing objectives.</h4>
          </div>
          <div className="mission-item">
            <h3> <strong>Global leader in comprehensive solutions:</strong></h3>
            <h4>Our aim is to be a global leader in digital marketing, offering seamless and comprehensive solutions that reduce organizational stress and meet the diverse needs of our clients.</h4>
          </div>
          <div className="mission-item">
            <h3><strong>Continuous innovation and evolution:</strong></h3>
            <h4>We are committed to continuously innovating and evolving our services to stay ahead of the ever-changing digital landscape and meet the evolving needs of our clients.</h4>
          </div>
        </div>
      </Container>
      <Container className="about-container">
        <div className="section1" style={{ backgroundColor: 'white', padding: '20px', color: 'white' }}>
          <div className="values">
            <h1 className="title">Values</h1>
            <img src={values} alt="Values" style={{ float: 'right', width: '200px' }} />
            <div className="mission-item">
              <h3><strong>Integrity:</strong></h3>
              <h4>We uphold the highest standards of integrity in all our interactions, ensuring transparency, honesty, and ethical conduct in every aspect of our business.</h4>
            </div>
            <div className="mission-item">
              <h3><strong>Accountability:</strong></h3>
              <h4>We take full responsibility for our actions and commitments, delivering on our promises and being accountable for the results we achieve for our clients.</h4>
            </div>
            <div className="mission-item">
              <h3><strong>Timely Delivery:</strong></h3>
              <h4>We understand the importance of delivering our services on time, respecting deadlines and ensuring timely completion of projects to meet our clients' expectations.</h4>
            </div>
            <div className="mission-item">
              <h3><strong>Honesty:</strong></h3>
              <h4>We value open and honest communication, fostering trust and building strong relationships with our clients based on transparency and sincerity.</h4>
            </div>
            <div className="mission-item">
              <h3><strong>Continuous Improvement:</strong></h3>
              <h4>We are dedicated to constant learning and improvement, striving to enhance our skills, knowledge, and expertise to provide the best possible digital solutions for our clients.</h4>
            </div>
          </div>
        </div>
      </Container>
      <Container className="about-container2" style={{ width: '50%' }}>
        <div className="section1" style={{ backgroundColor: 'white', padding: '20px', color: 'white' }}>
          <div className="values">
            <h1 className="title">About Us</h1>
            <div className="about-item">
              <div className="paragraph-justify">
                <h4>Established in August 2022, Creative Digital Media is a leading full-service digital marketing company. We excel in providing comprehensive back-end tech support to empower organizations in their digital marketing endeavors. Our unwavering mission is to deliver unparalleled services, enabling our clients to achieve exceptional results in the ever-evolving digital landscape. With a fusion of creativity and cutting-edge technology, we offer a diverse range of solutions, including social media management, website design and development, video production, and much more. Guided by our core values of integrity, accountability, timely delivery, and honesty, we strive to build enduring partnerships based on trust and transparency. Our visionary approach aims to become a global leader, alleviating organizational stress through seamless and innovative digital solutions, while continuously evolving to meet our clients' dynamic needs.</h4>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={partnership} alt="Partnership" style={{ width: '200px' }} />
                  <img src={success} alt="Success" style={{ width: '200px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

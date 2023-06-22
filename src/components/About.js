import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file for styling
import mission from "../assets/img/mission.png"

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
          <h1 className="vision" style={{ fontWeight: 'bold', fontFamily: 'Your Superior Font', fontSize: '60px' }}><strong>Vision</strong></h1>
          <h1>
            Shaping digital success worldwide through innovative strategies, expert guidance, and trusted partnerships.
          </h1>
        </div>
      </Container>
      <Container className="about-container" style={{ width: '50%' }}>

  <div className="section1" style={{ backgroundColor: 'white', padding: '20px', color: 'white' }}>
    <h1 className="title">Mission</h1>
    <img src={mission} alt="Mission Image" style={{ float: 'right', width: '200px' }} />
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
        <div className="values">
          <h1 className="title">Values</h1>
          <div className="vision-item">
            <h3><strong>Integrity:</strong></h3>
            <h4>We uphold the highest standards of integrity in all our interactions, ensuring transparency, honesty, and ethical conduct in every aspect of our business.</h4>
          </div>
          <div className="vision-item">
            <h3><strong>Accountability:</strong></h3>
            <h4>We take full responsibility for our actions and commitments, delivering on our promises and being accountable for the results we achieve for our clients.</h4>
          </div>
          <div className="vision-item">
            <h3><strong>Timely Delivery:</strong></h3>
            <h4>We understand the importance of delivering our services on time, respecting deadlines and ensuring timely completion of projects to meet our clients' expectations.</h4>
          </div>
          <div className="vision-item">
            <h3><strong>Honesty:</strong></h3>
            <h4>We value open and honest communication, fostering trust and building strong relationships with our clients based on transparency and sincerity.</h4>
          </div>
          <div className="vision-item">
            <h3><strong>Continuous Improvement:</strong></h3>
            <h4>We are dedicated to constant learning and improvement, striving to enhance our skills, knowledge, and expertise to provide the best possible digital solutions for our clients.</h4>
          </div>
        </div>
    </Container>
    <Container className="about-container">

    </Container>
    </div>
  );
};

export default About;

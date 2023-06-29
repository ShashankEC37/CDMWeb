import React from 'react';
import './Services.css';
import WebDevelopment from "../../assets/img/WebDevelopment.svg";
import DigitalMarketing from "../../assets/img/digital marketing.png";
import SocialMedia from "../../assets/img/socialmeda.png";
import Branding from "../../assets/img/Branding.png";
import DModeling from "../../assets/img/3D modeling.png";
import Videography from "../../assets/img/Video.png";
export const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <div className="carousel-item">
          <img src={DigitalMarketing} alt="Digital Marketing" />
          <h5>Digital Marketing</h5>
        </div>
        <div className="carousel-item">
          <img src={WebDevelopment} alt="Web Development" />
          <h5>Web Development</h5>
        </div>
        <div className="carousel-item">
          <img src={SocialMedia} alt="Social Media Management" />
          <h5>Social Media Management</h5>
        </div>
        <div className="carousel-item">
          <img src={Branding} alt="Branding" />
          <h5>Branding</h5>
        </div>
        <div className="carousel-item">
          <img src={Videography} alt="Videography and Photography" />
          <h5>Videography and Photography</h5>
        </div>
        <div className="carousel-item">
          <img src={DModeling} alt="3-D Modeling" />
          <h5>3-D Modeling</h5>
        </div>
      </div>
    </div>
  );
};


import { useState } from "react";
import { Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Close, Height } from '@mui/icons-material';
import "./ProjectCard.css"

export const ProjectCard = ({ title, description, imgUrl, Popupdisplay, Company }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 746, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };
  const carouselStyle = {
    background: '#ffffff',
    padding: '20px', // Default padding for non-mobile devices
  };
  
  // Check if the screen width is less than or equal to 768 pixels (mobile device)
  if (window.innerWidth <= 768) {
    carouselStyle.padding = '0'; // Remove padding for mobile devices
  }
  const [isHovered, setIsHovered] = useState(false);
 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const handleCloseClick = () => {
    setPopupVisible(false);
  };
  return (
    <Col size={100} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleImageClick}>
      <img src={imgUrl} alt={title} onClick={handleImageClick}  />
        <div  className="proj-txtx" onClick={handleImageClick}>
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
      </div>



      {popupVisible && (
      <div className="overlay">
        <div className="popup1">
        <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={!isHovered} // Continue autoplay when not hovered
      autoPlaySpeed={1500}
      pauseOnHover={true}
      className="owl-carousel owl-theme skill-slider"
      style={carouselStyle}
    >
      {Popupdisplay.map((image, index) => (
       <div key={index} className="item">
       <img
         src={image}
         alt={`Popup Image ${index}`}
         className="hoverable-image"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={{
           width: '70%',
           maxWidth: '100%',
           maxHeight: "80vh"
         }}
       />
       <h4 style={{ color: 'black' }}>{Company[index]}</h4>
     </div>
     
      ))}
    </Carousel>
          <button className="close-button" onClick={handleCloseClick}>
            <Close />
          </button>
        </div>
      </div>
    )}

  </Col>
  );
};

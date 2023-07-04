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
      items: 2,
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
  };
  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const handleCloseClick = () => {
    setPopupVisible(false);
  };

  const popupStyle = {
    backgroundColor: 'white',
    borderRadius: "40px",
    overflow: 'auto',
    maxHeight: '100vh',
    width: "2000px",
    height: "600px",
  };
  

  

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleImageClick}>
        <img src={imgUrl} alt={title} onClick={handleImageClick}/>
        <div  className="proj-txtx" onClick={handleImageClick}>
          <h4>{title}</h4>
          <span  onClick={handleImageClick}>{description}</span>
          
        </div>
      </div>



      {popupVisible && (
      <div className="overlay">
        <div className="popup1" style={popupStyle}>
          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} pauseOnHover={true} className="owl-carousel owl-theme skill-slider" style={carouselStyle}>
            {Popupdisplay.map((image, index) => (
              <div key={index} className="item">
                <img
  src={image}
  style={{
    width: '450px',
    height: '350px',
    transition: 'max-width 0.3s ease',
  }}
  alt={`Popup Image ${index}`}
  className="hoverable-image"
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

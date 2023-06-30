import React, { useState } from 'react';
import './ServiceDetails.css';
import { services } from './ServiceList';
import { Close } from '@mui/icons-material';

const ServiceCard = ({ title, image, handleCardClick }) => {
  return (
    <div className="service-card" onClick={handleCardClick}>
      <img src={image} alt={title} className="service-card__image" />
      <h2 className="service-card__title">{title}</h2>
      <p>Click To know More</p>
    </div>
  );
};

const ServiceDetails = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseClick = () => {
    setSelectedService(null);
  };

  const popupStyle = {
    backgroundColor: 'white',
    overflow: 'auto', // Add overflow property to enable scrolling
    maxHeight: '100vh', // Set a maximum height for the popup content
    padding: '20px', // Add padding on all sides
  };
  
  
  

  return (
    <div className="container2">
      <h1>Our Services</h1>

      {selectedService && (
        <div className="overlay">
          <div className="popup" style={popupStyle}>
            <br></br>
            <h2 className="popup__details" style={{ textAlign: 'left' }}>
              {selectedService.details}
            </h2>
            <button className="close-button" onClick={handleCloseClick}>
              <Close />
            </button>
          </div>
        </div>
      )}

      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            details={service.details}
            handleCardClick={() => handleCardClick(service)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;

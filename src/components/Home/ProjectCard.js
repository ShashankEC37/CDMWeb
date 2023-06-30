import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Popupdisplay }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleImageClick = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleImageClick}>
        <img src={imgUrl} onClick={handleImageClick} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      {popupVisible && (
        <div className="popup">
          <img src={Popupdisplay} alt="Popup Image" />
        </div>
      )}
    </Col>
  );
};

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const InstagramIcon = () => {
  const handleInstagramClick = () => {
    const instagramLink = 'https://www.instagram.com/creativedigitalmedia2022/';

    window.open(instagramLink, '_blank');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon
        icon={faInstagram}
        style={{ color: '#C13584', fontSize: '40px', cursor: 'pointer' }}
        onClick={handleInstagramClick}
      />
      <div style={{ fontSize: '16px', marginTop: '5px' }}>Instagram</div>
    </div>
  );
};

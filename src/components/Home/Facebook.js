import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export const FacebookIcon = () => {
  const handleFacebookClick = () => {
    const facebookLink = 'https://www.facebook.com/ParamCDM';

    window.open(facebookLink, '_blank');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon
        icon={faFacebook}
        style={{ color: '#1877F2', fontSize: '40px', cursor: 'pointer' }}
        onClick={handleFacebookClick}
      />
      <div style={{ fontSize: '16px', marginTop: '5px' }}>Facebook</div>
    </div>
  );
};

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const LinkedInIcon = () => {
  const handleLinkedInClick = () => {
    const linkedInLink = 'https://www.linkedin.com/company/creativedigitalmedia/';

    window.open(linkedInLink, '_blank');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon
        icon={faLinkedin}
        style={{ color: '#0077B5', fontSize: '50px', cursor: 'pointer' }}
        onClick={handleLinkedInClick}
      />
      <div style={{ fontSize: '16px', marginTop: '5px' }}>LinkedIn</div>
    </div>
  );
};

import React from 'react';


import './BackgroundHomeResponsivePhone.css';

const BackgroundHomeResponsivePhone = () => {
  const videoSource = "http://35.153.206.173/backgroundphone/backgroundresponsivephone.webm"
  return (
    <div className="responsivehome">
      <video autoPlay="autoplay" loop="loop" muted className="responsivevideo">
        <source src={videoSource} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundHomeResponsivePhone;

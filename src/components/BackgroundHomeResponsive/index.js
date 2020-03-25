import React from 'react';


import './BackgroundHomeResponsive.css';

const BackgroundHomeResponsive = () => {
  const videoSource = "http://35.153.206.173/BackResponsiveVideo/Orefugeresponsportrait.webm"
  return (
    <div className="responsivehome">
      <video autoPlay="autoplay" loop="loop" muted className="responsivevideo">
        <source src={videoSource} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundHomeResponsive;

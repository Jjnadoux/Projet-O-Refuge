import React from 'react';


import './BanRespLandTablet.css';

const BanRespLandTablet = () => {
  const videoSource = "http://35.153.206.173/BannerVideo01/BanRespLandTablet_1.webm"
  return (
    <div className="BanVideoBloc">
      <video autoPlay="autoplay" loop="loop" muted className="banVid">
        <source src={videoSource} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="blackbloc">{/* un bloc noir */}</div>
    </div>
  );
};

export default BanRespLandTablet;

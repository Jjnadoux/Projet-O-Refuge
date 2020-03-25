import React from 'react';
import { NavLink } from 'react-router-dom';

import './BackgroundHomeResponsivePhoneLandscape.css';

const BackgroundHomeResponsivePhoneLandscape = () => {
  const videoSource = "http://35.153.206.173/backgroundphone/orefugelandscapephone.webm"
  return (
    <div className="responsivehome">
      <video autoPlay="autoplay" loop="loop" muted className="responsivevideo">
        <source src={videoSource} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="acces">
        <div className="SubAcces">
          <h1>Trouver votre compagnon !</h1>
          <p>Des milliers d'animaux vous attendent</p>
          <NavLink to="/les-refuges"><button type="button" className="btn btn-outline-dark">Les refuges</button></NavLink>
          <NavLink to="/les-animaux"><button type="button" className="btn btn-outline-dark">Les animaux</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHomeResponsivePhoneLandscape;

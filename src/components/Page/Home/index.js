import React from 'react';
import { NavLink } from 'react-router-dom';

import './home.css';
import BackgroundVideo from 'src/components/Background';
import BackgroundHomeResponsive from 'src/components/BackgroundHomeResponsive';
import BackgroundHomeResponsivePhone from 'src/components/BackgroundHomeResponsivePhone';
import BackgroundHomeResponsivePhoneLandscape from 'src/components/BackgroundHomeResponsivePhoneLandscape';
import BackgroundHomeResponsiveTabletLandscape from 'src/components/BackgroundHomeResponsiveTabletLandscape';
import logo from 'src/assets/images/logo.png';
import Connexion from 'src/containers/Connexion';
import Fade from 'react-reveal/Fade';

import { useMediaQuery } from 'react-responsive';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1400 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 450, maxWidth: 1024 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 200, maxWidth: 450 })
  return isMobile ? children : null
}
const MobileLandscape = ({ children }) => {
  const isMobileLandscape = useMediaQuery({ orientation:'landscape', minWidth: 200, maxWidth: 972 })
  return isMobileLandscape ? children : null
}
const TabletLandscape = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ orientation:'landscape', minWidth: 972, maxWidth: 1400 })
  return isTabletLandscape ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Home = () => (
  <div className="home">
    <Desktop>
      <div className="images">
        <Fade><div className="video"><BackgroundVideo /></div></Fade>
        <div className="navigation">
          <NavLink
            to="/"
            className="navigation-item"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/temoignages"
            className="navigation-item"
          >
            Ils ont été adoptés
          </NavLink>
          <img className="logo" alt="logo" src={logo} />
          <NavLink
            to="/presentation"
            className="navigation-item"
            exact
          >
            Présentation
          </NavLink>
          <NavLink
            to="/nos-conseils"
            className="navigation-item"
            exact
          >
            Nos conseils
          </NavLink>
        </div>
      </div>
      <div className="CoHome">
        <Connexion />
      </div>
    </Desktop>
    <Tablet>
      <div className="responsiveHome">
        <Fade><BackgroundHomeResponsive /></Fade>
        <div className="RespNavTablet">
          <div className="ResNav-logo1">
            <img className="RespNav-logoTablet" alt="logo" src={logo} />
          </div>
          <div className="ResNav-1Tablet">
            <NavLink
              to="/"
              className="RespNav-itemTablet"
              exact
            >
              Accueil
            </NavLink>
          </div>
          <div className="ResNav-1Tablet">
            <NavLink
              to="/temoignages"
              className="RespNav-itemTablet"
            >
              Ils ont été adoptés
            </NavLink>
          </div>
          <div className="ResNav-1Tablet">
            <NavLink
              to="/presentation"
              className="RespNav-itemTablet"
              exact
            >
              Présentation
            </NavLink>
          </div>
          <div className="ResNav-1Tablet">
            <NavLink
              to="/nos-conseils"
              className="RespNav-itemTablet"
              exact
            >
              Nos conseils
            </NavLink>
          </div>
          <div className="ResNav-1Tablet">
            <NavLink
              to="/nous-contacter"
              className="RespNav-contactTablet"
              exact
            >
              <i className="fas fa-envelope" ></i>
            </NavLink>
          </div>
          <div className="ResNav-txtTablet">
            <h1 className="titleAccueilTablet">Trouver votre compagnon !</h1>
            <p className="textAccueilTablet">Des milliers d'animaux vous attendent</p>
          </div>
          <div className="ResNav-8Tablet">
            <NavLink to="/les-refuges" className="RespNav-item2Tablet" exact>Les refuges</NavLink>
            <NavLink to="/les-animaux" className="RespNav-item2Tablet" exact>Les animaux</NavLink>
          </div>
        </div>
      </div>
    </Tablet>
    <Mobile>
      <div className="responsiveHome">
        <Fade><BackgroundHomeResponsivePhone /></Fade>
        <div className="RespNav">
          <div className="ResNav-logo1">
            <img className="RespNav-logo" alt="logo" src={logo} />
          </div>
          <div className="ResNav-1">
            <NavLink
              to="/"
              className="RespNav-item"
              exact
            >
              Accueil
            </NavLink>
          </div>
          <div className="ResNav-1">
            <NavLink
              to="/temoignages"
              className="RespNav-item"
            >
              Ils ont été adoptés
            </NavLink>
          </div>
          <div className="ResNav-1">
            <NavLink
              to="/presentation"
              className="RespNav-item"
              exact
            >
              Présentation
            </NavLink>
          </div>
          <div className="ResNav-1">
            <NavLink
              to="/nos-conseils"
              className="RespNav-item"
              exact
            >
              Nos conseils
            </NavLink>
          </div>
          <div className="ResNav-1">
            <NavLink
              to="/nous-contacter"
              className="RespNav-contact"
              exact
            >
              <i className="fas fa-envelope" ></i>
            </NavLink>
          </div>
          <div className="ResNav-txt">
            <h1 className="titleAccueil">Trouver votre compagnon !</h1>
            <p className="textAccueil">Des milliers d'animaux vous attendent</p>
          </div>
          <div className="ResNav-8">
            <NavLink to="/les-refuges" className="RespNav-item2" exact>Les refuges</NavLink>
            <NavLink to="/les-animaux" className="RespNav-item2" exact>Les animaux</NavLink>
          </div>
        </div>
      </div>
    </Mobile>
    <MobileLandscape>
      <div className="images">
        <Fade><div className="video"><BackgroundHomeResponsivePhoneLandscape /></div></Fade>
        <div className="navigationMobile">
          <NavLink
            to="/"
            className="navigation-itemMobileLand"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/temoignages"
            className="navigation-itemMobileLand"
          >
            Ils ont été adoptés
          </NavLink>
          <img className="logoMobileLand" alt="logo" src={logo} />
          <NavLink
            to="/presentation"
            className="navigation-itemMobileLand"
            exact
          >
            Présentation
          </NavLink>
          <NavLink
            to="/nos-conseils"
            className="navigation-itemMobileLand"
            exact
          >
            Nos conseils
          </NavLink>
          <NavLink
            to="/nous-contacter"
            className="navigation-contact"
            exact
          >
            <i className="fas fa-envelope" ></i>
          </NavLink>
        </div>
      </div>
    </MobileLandscape>
    <TabletLandscape>
      <div className="images">
        <Fade><div className="video"><BackgroundHomeResponsiveTabletLandscape /></div></Fade>
        <div className="navigation">
          <NavLink
            to="/"
            className="navigation-item"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/temoignages"
            className="navigation-item"
          >
            Ils ont été adoptés
          </NavLink>
          <img className="logo" alt="logo" src={logo} />
          <NavLink
            to="/presentation"
            className="navigation-item"
            exact
          >
            Présentation
          </NavLink>
          <NavLink
            to="/nos-conseils"
            className="navigation-item"
            exact
          >
            Nos conseils
          </NavLink>
          <NavLink
            to="/nous-contacter"
            className="navigation-contact"
            exact
          >
            <i className="fas fa-envelope" ></i>
          </NavLink>
        </div>
      </div>
    </TabletLandscape>
  </div>
);

export default Home;

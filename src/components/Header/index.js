import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';
import logo from 'src/assets/images/logo.png';


import BanVideo from 'src/components/BanVideo';
import BanRespPortraitTablet from 'src/components/BanRespPortraitTablet';
import BanRespLandTablet from 'src/components/BanRespLandTablet';

import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1400 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ orientation: 'portrait', minWidth: 450, maxWidth: 1024})
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ orientation: 'portrait', minWidth: 200, maxWidth: 450 })
  return isMobile ? children : null
}
const MobileLandscape = ({ children }) => {
  const isMobileLandscape = useMediaQuery({ orientation: 'landscape', minWidth: 200, maxWidth: 972 })
  return isMobileLandscape ? children : null
}
const TabletLandscape = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ orientation: 'landscape', minWidth: 1024, maxWidth: 1400 })
  return isTabletLandscape ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Header = ({ image }) => (
  <div className="header">
    <Desktop>
      <div className="imagesban">
        <div className="banniere"><BanVideo /></div>
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
          <NavLink
            to="/les-refuges"
            className="navigation-item"
          >
            Les refuges
          </NavLink>
          <img className="logo" alt="logo" src={logo} />
          <NavLink
            to="/les-animaux"
            className="navigation-item"
          >
            Les animaux
          </NavLink>
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
    </Desktop>
    <Tablet>
      <div className="imagesbantablet">
        <div className="bannieretablet"><BanRespPortraitTablet /></div>
        <div className="navigationtablet">
          <NavLink
            to="/"
            className="navigation-itemtablet"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/temoignages"
            className="navigation-itemtablet"
          >
            Ils ont été adoptés
          </NavLink>
          <img className="logotablet" alt="logo" src={logo} />
          <NavLink
            to="/presentation"
            className="navigation-itemtablet"
            exact
          >
            Présentation
          </NavLink>
          <NavLink
            to="/nos-conseils"
            className="navigation-itemtablet"
            exact
          >
            Nos conseils
          </NavLink>
        </div>
        <div className="Navprincipauxtablet">
          <NavLink
            to="/les-refuges"
            className="navigation-itemtablet"
          >
            Les refuges
          </NavLink>
          <NavLink
            to="/les-animaux"
            className="navigation-itemtablet"
          >
            Les animaux
          </NavLink>
        </div>
      </div>
    </Tablet>
    <Mobile>
      <div className="imagesbanMobilePortrait">
        <div className="banniereMobilePortrait"><BanRespPortraitTablet /></div>

        <div className="navigationGaucheMobilePortrait">
          <NavLink
            to="/"
            className="navigation-itemMobilePortrait"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/temoignages"
            className="navigation-itemMobilePortrait"
          >
            Ils ont été adoptés
          </NavLink>
          <NavLink
            to="/les-refuges"
            className="navigation-itemMobilePortrait"
          >
            Les refuges
          </NavLink>
        </div>
        <div className="centreMobilePortrait">
          <img className="logoMobilePortrait" alt="logo" src={logo} />
        </div>
        <div className="navigationDroiteMobilePortrait">
          <NavLink
            to="/les-animaux"
            className="navigation-itemMobilePortrait"
          >
            Les animaux
          </NavLink>
          <NavLink
            to="/presentation"
            className="navigation-itemMobilePortrait"
            exact
          >
            Présentation
          </NavLink>
          <NavLink
            to="/nos-conseils"
            className="navigation-itemMobilePortrait"
            exact
          >
            Nos conseils
          </NavLink>
        </div>

      </div>
    </Mobile>
    <MobileLandscape>
      <div className="imagesbanMobileLand">
        <div className="banniereMobileLand"><BanRespPortraitTablet /></div>
        <div className="navigationMobileLand">
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
        </div>
        <div className="NavprincipauxMobileLand">
          <NavLink
            to="/les-refuges"
            className="navigation-itemMobileLand"
          >
            Les refuges
          </NavLink>
          <NavLink
            to="/les-animaux"
            className="navigation-itemMobileLand"
          >
            Les animaux
          </NavLink>
        </div>
      </div>
    </MobileLandscape>
    <TabletLandscape>
      <div className="imagesbantablet">
        <div className="bannieretablet"><BanRespLandTablet /></div>
        <div className="navigationtablet">
          <NavLink
            to="/"
            className="navigation-itemtablet"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/temoignages"
            className="navigation-itemtablet"
          >
            Ils ont été adoptés
          </NavLink>
          <img className="logotablet" alt="logo" src={logo} />
          <NavLink
            to="/presentation"
            className="navigation-itemtablet"
            exact
          >
            Présentation
          </NavLink>
          <NavLink
            to="/nos-conseils"
            className="navigation-itemtablet"
            exact
          >
            Nos conseils
          </NavLink>
        </div>
        <div className="Navprincipauxtablet">
          <NavLink
            to="/les-refuges"
            className="navigation-itemtablet"
          >
            Les refuges
          </NavLink>
          <NavLink
            to="/les-animaux"
            className="navigation-itemtablet"
          >
            Les animaux
          </NavLink>
        </div>
      </div>
    </TabletLandscape>
  </div>
);

export default Header;

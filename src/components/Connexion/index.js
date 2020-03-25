import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import PopUp from 'src/containers/PopUp';
import { Button, ButtonToolbar } from 'react-bootstrap';

import './connexion.css';
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

const Connexion = ({ isLogged, handleLogout }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick = (event) => {
    
    event.preventDefault();
    // console.log('submit de Settings');
    handleLogout();
  };
  return (
    <div className="connexionBloc">
      <Desktop>
        <div className="contactButton">
          <ButtonToolbar>
            <Button className="ButtonContact" variant="primary" onClick={() => setModalShow(true)}>
              <IoIosMail className="logoMail" />
            </Button>
            <PopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </div>
        {!isLogged && (
        <div className="connexionButton">
          <NavLink
            to="/se-connecter"
            className="navigation-item"
            exact
          >
            Refuge
            <FaUserAlt className="logologin" />
          </NavLink>
        </div>
        )}
        {isLogged && (
        <div className="connexionButton">
          <NavLink
            to="/AdminRefuge/:id"
            className="navigation-item"
            exact
          >
            Mon compte
            <FaUserAlt className="logologin" />
          </NavLink>
          <Button
            onClick={handleClick}
            className="navigation-itemDec"
          >
            Deconnexion
          </Button>
        </div>
        )}
      </Desktop>
      <Tablet>
        <div className="contactButtonTablet">
          <ButtonToolbar>
            <Button className="ButtonContactTablet" variant="primary" onClick={() => setModalShow(true)}>
              <IoIosMail className="logoMailTablet" />
            </Button>
            <PopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </div>
        {!isLogged && (
        <div className="connexionButtonTablet">
          <NavLink
            to="/se-connecter"
            className="navigation-itemTablet"
            exact
          >
            Refuge
            <FaUserAlt className="logologinTablet" />
          </NavLink>
        </div>
        )}
        {isLogged && (
        <div className="connexionButtonTablet">
          <NavLink
            to="/se-connecter"
            className="navigation-itemTablet"
            exact
          >
            Mon compte
            <FaUserAlt className="logologinTablet" />
          </NavLink>
          <Button
            onClick={handleClick}
            className="navigation-itemDecTablet"
          >
            Deconnexion
          </Button>
        </div>
        )}
      </Tablet>
      <TabletLandscape>
        <div className="contactButtonTablet">
          <ButtonToolbar>
            <Button className="ButtonContactTablet" variant="primary" onClick={() => setModalShow(true)}>
              <IoIosMail className="logoMailTablet" />
            </Button>
            <PopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </div>
        {!isLogged && (
        <div className="connexionButtonTablet">
          <NavLink
            to="/se-connecter"
            className="navigation-itemTablet"
            exact
          >
            Refuge
            <FaUserAlt className="logologinTablet" />
          </NavLink>
        </div>
        )}
        {isLogged && (
        <div className="connexionButtonTablet">
          <NavLink
            to="/se-connecter"
            className="navigation-itemTablet"
            exact
          >
            Mon compte
            <FaUserAlt className="logologinTablet" />
          </NavLink>
          <Button
            onClick={handleClick}
            className="navigation-itemDecTablet"
          >
            Deconnexion
          </Button>
        </div>
        )}
      </TabletLandscape>
      <Mobile>
        <div className="connexionBlocMobile">
          <div className="contactButtonMobile">
            <ButtonToolbar>
              <Button className="ButtonContactMobile" variant="primary" onClick={() => setModalShow(true)}>
                <IoIosMail className="logoMailMobile" />
              </Button>
              <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          </div>
          {!isLogged && (
          <div className="connexionButtonMobile">
            <NavLink
              to="/se-connecter"
              className="navigation-itemMobile"
              exact
            >
              Refuge
              <FaUserAlt className="logologinMobile" />
            </NavLink>
          </div>
          )}
          {isLogged && (
          <div className="connexionButtonMobile">
            <NavLink
              to="/se-connecter"
              className="navigation-itemMobile"
              exact
            >
              Mon compte
              <FaUserAlt className="logologinMobile" />
            </NavLink>
            <Button
              onClick={handleClick}
              className="navigation-itemDecMobile"
            >
              Deconnexion
            </Button>
          </div>
          )}
        </div>
      </Mobile>
      <MobileLandscape>
      <div className="contactButtonTablet">
          <ButtonToolbar>
            <Button className="ButtonContactTablet" variant="primary" onClick={() => setModalShow(true)}>
              <IoIosMail className="logoMailTablet" />
            </Button>
            <PopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </div>
        {!isLogged && (
        <div className="connexionButtonTablet">
          <NavLink
            to="/se-connecter"
            className="navigation-itemTablet"
            exact
          >
            Refuge
            <FaUserAlt className="logologinTablet" />
          </NavLink>
        </div>
        )}
        {isLogged && (
        <div className="connexionButtonTablet">
          <NavLink
            to="/se-connecter"
            className="navigation-itemTablet"
            exact
          >
            Mon compte
            <FaUserAlt className="logologinTablet" />
          </NavLink>
          <Button
            onClick={handleClick}
            className="navigation-itemDecTablet"
          >
            Deconnexion
          </Button>
        </div>
        )}
      </MobileLandscape>
    </div>
  );
};


export default Connexion;

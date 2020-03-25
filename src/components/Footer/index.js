import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { IoIosMail } from 'react-icons/io';

import PopUp from 'src/containers/PopUp';

import './footer.css';

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

const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="footer">
      <Desktop>
        <NavLink className="item" to="./"> Accueil</NavLink>
        <ButtonToolbar className="item3">
          <Button className="item2" onClick={() => setModalShow(true)}>
            <IoIosMail className="logoMail2" />
          </Button>
          <PopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
        <NavLink className="item" to="./MentionsLegales">Mentions Légales</NavLink>
        <NavLink to="./"><a href="" className="item"> Plan du site </a></NavLink>
        <NavLink to="./Presentation"><a href="" className="item"> Qui sommes nous? </a></NavLink>
      </Desktop>
      <Tablet>
        <div className="footer">
          <NavLink className="item" to="./"> Accueil</NavLink>
          <ButtonToolbar className="item3">
            <Button className="item2" onClick={() => setModalShow(true)}>
              <IoIosMail className="logoMail2" />
            </Button>
            <PopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
          <NavLink className="item" to="./MentionsLegales">Mentions Légales</NavLink>
          <NavLink to="./"><a href="" className="item"> Plan du site </a></NavLink>
          <NavLink to="./Presentation"><a href="" className="item"> Qui sommes nous? </a></NavLink>
        </div>
      </Tablet>
      <Mobile>
        <div className="footerMobile">
          <div className="FirstFooter">
            <NavLink className="itemMobile" to="./"> Accueil</NavLink>
            <ButtonToolbar className="item3Mobile">
              <Button className="item2Mobile" onClick={() => setModalShow(true)}>
                <IoIosMail className="logoMail2Mobile" />
              </Button>
              <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
            <NavLink className="itemMobile" to="./MentionsLegales">Mentions Légales</NavLink>
          </div>
          <div className="SecondFooter">
            <NavLink to="./"><a href="" className="itemMobile"> Plan du site </a></NavLink>
            <NavLink to="./Presentation"><a href="" className="itemMobile"> Qui sommes nous? </a></NavLink>
          </div>
        </div>
      </Mobile>
      <TabletLandscape>
        <NavLink className="item" to="./"> Accueil</NavLink>
        <ButtonToolbar className="item3">
          <Button className="item2" onClick={() => setModalShow(true)}>
            <IoIosMail className="logoMail2" />
          </Button>
          <PopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
        <NavLink className="item" to="./MentionsLegales">Mentions Légales</NavLink>
        <NavLink to="./">Plan du site</NavLink>
        <NavLink to="./Presentation">Qui sommes nous?</NavLink>
      </TabletLandscape>
      <MobileLandscape>
        <div className="footer">
          <NavLink className="item" to="./"> Accueil</NavLink>
          <ButtonToolbar className="item3">
            <Button className="item2" onClick={() => setModalShow(true)}>
              <IoIosMail className="logoMail2" />
            </Button>
            <PopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
          <NavLink className="item" to="./MentionsLegales">Mentions Légales</NavLink>
          <NavLink to="./"><a href="" className="item"> Plan du site </a></NavLink>
          <NavLink to="./Presentation"><a href="" className="item"> Qui sommes nous? </a></NavLink>
        </div>
      </MobileLandscape>
    </div>
  );
};
export default Footer;

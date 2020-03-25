import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';


import './lesrefuges.css';
import toutou from 'src/assets/images/museauDog.png';
import SearchRegion from './SearchRegion';
import SearchDepart from './SearchDepart';

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

const LesRefuges = ({ shelters }) => {

  const [searchRegion, setSearchRegion] = useState('Choisir...');
  const [searchDepart, setSearchDepart] = useState('Choisir...');

  let sheltersFiltered;
  if (searchRegion === 'Choisir...') {
    sheltersFiltered = shelters;
  }
  else {
    sheltersFiltered = shelters.filter((shelter) => shelter.department.region.name === searchRegion);
  }
  if (searchDepart !== 'Choisir...') {

    sheltersFiltered = sheltersFiltered.filter((shelter) => shelter.department.name === searchDepart);
  }

  return (
    <div className="page">
      <Desktop>
        <Fade bottom><img src={toutou} alt="museauDog" className="museau" /></Fade>
        <div className="districtPage">
          <h1 className="titlePageRefuge">Chercher un Refuge</h1>
          <div className="districtBloc">
            <div className="searchDistrict">
              <h3> Région </h3>
              <div className="dropdown">
                <SearchRegion search={searchRegion} setSearch={setSearchRegion} />
              </div>
            </div>
            <div className="searchDistrict">
              <h3> Département </h3>
              <div className="dropdown">
                <SearchDepart search={searchDepart} setSearch={setSearchDepart} />
              </div>
            </div>
          </div>
        </div>
        <div className="flexCarte">
          <div className="ResultsRefuge">
            {sheltersFiltered.map((shelter) => (
              <div key={shelter.id} className="cardShelters">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/shelters/${shelter.picture1}`} className="imageShelter" alt="Refuge" />
                <div>
                  <div className="divTitle">
                    <div className="title">{shelter.name}</div>
                  </div>
                  <div className="textCarte">
                    {shelter.description}
                  </div>
                  <div className="lieu">
                    <div className="zipcode">
                      {shelter.zipcode}
                    </div>
                    <div className="city">
                      {shelter.city}
                    </div>
                  </div>
                  <NavLink to={`/refuge/${shelter.id}`}><Button className="buttonLesRefuges">voir le refuge</Button></NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Desktop>

      <TabletLandscape>
        <Fade bottom><img src={toutou} alt="museauDog" className="museau" /></Fade>
        <div className="districtPage">
          <h1 className="titlePageRefuge">Chercher un Refuge</h1>
          <div className="districtBloc">
            <div className="searchDistrict">
              <h3> Région </h3>
              <div className="dropdown">
                <SearchRegion search={searchRegion} setSearch={setSearchRegion} />
              </div>
            </div>
            <div className="searchDistrict">
              <h3> Département </h3>
              <div className="dropdown">
                <SearchDepart search={searchDepart} setSearch={setSearchDepart} />
              </div>
            </div>
          </div>
        </div>
        <div className="flexCarte">
          <div className="ResultsRefuge">
            {sheltersFiltered.map((shelter) => (
              <div key={shelter.id} className="cardShelters">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/shelters/${shelter.picture1}`} className="imageShelter" alt="Refuge" />
                <div>
                  <div className="divTitle">
                    <div className="title">{shelter.name}</div>
                  </div>
                  <div className="text">
                    {shelter.description}
                  </div>
                  <div className="lieu">
                    <div className="zipcode">
                      {shelter.zipcode}
                    </div>
                    <div className="city">
                      {shelter.city}
                    </div>
                  </div>
                  <NavLink to={`/refuge/${shelter.id}`}><Button className="buttonLesRefuges">voir le refuge</Button></NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabletLandscape>
      <Tablet>
        <Fade bottom><img src={toutou} alt="museauDog" className="museauTablet" /></Fade>
        <div className="districtPageTablet">
          <h1 className="titlePageRefugeTablet">Chercher un Refuge</h1>
          <div className="districtBlocTablet">
            <div className="searchDistrictTablet">
              <h3> Région </h3>
              <div className="dropdownTablet">
                <SearchRegion search={searchRegion} setSearch={setSearchRegion} />
              </div>
            </div>
            <div className="searchDistrictTablet">
              <h3> Département </h3>
              <div className="dropdownTablet">
                <SearchDepart search={searchDepart} setSearch={setSearchDepart} />
              </div>
            </div>
          </div>
        </div>
        <div className="flexCarte">
          <div className="ResultsRefuge">
            {sheltersFiltered.map((shelter) => (
              <div key={shelter.id} className="cardShelters">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/shelters/${shelter.picture1}`} className="imageShelter" alt="Refuge" />
                <div>
                  <div className="divTitle">
                    <div className="title">{shelter.name}</div>
                  </div>
                  <div className="text">
                    {shelter.description}
                  </div>
                  <div className="lieu">
                    <div className="zipcode">
                      {shelter.zipcode}
                    </div>
                    <div className="city">
                      {shelter.city}
                    </div>
                  </div>
                  <NavLink to={`/refuge/${shelter.id}`}><Button className="buttonLesRefuges">voir le refuge</Button></NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tablet>
      <MobileLandscape>
        <Fade bottom><img src={toutou} alt="museauDog" className="museauTablet" /></Fade>
        <div className="districtPageTablet">
          <h1 className="titlePageRefugeTablet">Chercher un Refuge</h1>
          <div className="districtBlocTablet">
            <div className="searchDistrictTablet">
              <h3> Région </h3>
              <div className="dropdownTablet">
                <SearchRegion search={searchRegion} setSearch={setSearchRegion} />
              </div>
            </div>
            <div className="searchDistrictTablet">
              <h3> Département </h3>
              <div className="dropdownTablet">
                <SearchDepart search={searchDepart} setSearch={setSearchDepart} />
              </div>
            </div>
          </div>
        </div>
        <div className="flexCarte">
          <div className="ResultsRefuge">
            {sheltersFiltered.map((shelter) => (
              <div key={shelter.id} className="cardShelters">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/shelters/${shelter.picture1}`} className="imageShelter" alt="Refuge" />
                <div>
                  <div className="divTitle">
                    <div className="title">{shelter.name}</div>
                  </div>
                  <div className="text">
                    {shelter.description}
                  </div>
                  <div className="lieu">
                    <div className="zipcode">
                      {shelter.zipcode}
                    </div>
                    <div className="city">
                      {shelter.city}
                    </div>
                  </div>
                  <NavLink to={`/refuge/${shelter.id}`}><Button className="buttonLesRefuges">voir le refuge</Button></NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MobileLandscape>
      <Mobile>
        <Fade bottom><img src={toutou} alt="museauDog" className="museauMobile" /></Fade>
        <div className="districtPageMobile">
          <h1 className="titlePageRefugeMobile">Chercher un Refuge</h1>
          <div className="districtBlocMobile">
            <div className="searchDistrictMobile">
              <h3> Région </h3>
              <div className="dropdownMobile">
                <SearchRegion search={searchRegion} setSearch={setSearchRegion} />
              </div>
            </div>
            <div className="searchDistrictMobile">
              <h3> Département </h3>
              <div className="dropdownMobile">
                <SearchDepart search={searchDepart} setSearch={setSearchDepart} />
              </div>
            </div>
          </div>
        </div>
        <div className="flexCarte">
          <div className="ResultsRefuge">
            {sheltersFiltered.map((shelter) => (
              <div key={shelter.id} className="cardShelters">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/shelters/${shelter.picture1}`} className="imageShelter" alt="Refuge" />
                <div>
                  <div className="divTitle">
                    <div className="title">{shelter.name}</div>
                  </div>
                  <div className="text">
                    {shelter.description}
                  </div>
                  <div className="lieu">
                    <div className="zipcode">
                      {shelter.zipcode}
                    </div>
                    <div className="city">
                      {shelter.city}
                    </div>
                  </div>
                  <NavLink to={`/refuge/${shelter.id}`}><Button className="buttonLesRefuges">voir le refuge</Button></NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Mobile>

    </div>
  );
};

LesRefuges.propTypes = {
  shelters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default LesRefuges;

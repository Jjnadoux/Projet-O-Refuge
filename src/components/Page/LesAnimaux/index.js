import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Button } from 'react-bootstrap';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import chaton from 'src/assets/images/chaton.png';
import SearchSpecies from './SearchSpecies';
import SearchDepart from './SearchGender';

import './lesanimaux.css';

import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ orientation: 'portrait', minWidth: 450, maxWidth: 1000})
  return isTablet ? children : null
}
const BigTablet = ({ children }) => {
  const isTablet = useMediaQuery({ orientation: 'portrait', minWidth: 1000, maxWidth: 1300})
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
  const isTabletLandscape = useMediaQuery({ orientation: 'landscape', minWidth: 972, maxWidth: 1200 })
  return isTabletLandscape ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const LesAnimaux = ({ animals }) => {
console.log(animals);
  const [searchSpecies, setSearchSpecies] = useState('Tous');
  const [searchGender, setSearchGender] = useState('Choisir...');

  let animalsFiltered;
  if (searchSpecies === 'Tous') {
    animalsFiltered = animals;
  }
  else {
    animalsFiltered = animals.filter((animal) => animal.species.name === searchSpecies);
  }
  if (searchGender !== 'Choisir...') {

     animalsFiltered = animalsFiltered.filter((animal) => animal.gender === searchGender);
  }

  return (
    <div className="fond">
      <Desktop>
        <h1 className="titlePage"> Les animaux à l'adoption</h1>
        <div className="colonneGaucheChatLesAnimaux">
          <div className="imageDecoLesAnimaux"><img src={chaton} alt="deco" className="chatonLesAnimaux" /></div>
          <div className="formFilterLesAnimaux">
            <p>Filtrer votre recherche</p>
            <SearchSpecies search={searchSpecies} setSearch={setSearchSpecies}/>
            <SearchDepart search={searchGender} setSearch={setSearchGender} />
          </div>
        </div>
        <div className="flexdroiteLesAnimaux">
          <div className="colonneDroiteLesAnimaux">
            { animalsFiltered.map((animal) => (
              <div key={animal.id} className="cardAnimalsLesAnimaux">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animal.picture1}`} alt="Annimal" className="imageAnimalLesAnimaux" />
                <div className="divTitleLesAnimaux">
                  <div className="titleLesAnimaux">{animal.name}</div>
                  {(animal.gender === 'Femelle') && (
                    <div>
                      <IoMdFemale className="logoGenderLesAnimaux" />
                    </div>
                  )}
                  {(animal.gender === 'Mâle') && (
                    <div>
                      <IoMdMale className="logoGenderLesAnimaux" />
                    </div>
                  )}
                </div>
                <div className="textLesAnimaux">
                  {animal.shelter.name}
                </div>
                <div className="textLesAnimaux">
                  {animal.description}
                </div>
                <NavLink to={`/les-animaux/${animal.id}`}> <Button className="buttonficheLesAnimaux">voir sa fiche</Button></NavLink>
              </div>
            ))}
          </div>
        </div>
      </Desktop>
      <TabletLandscape>
        <h1 className="titlePage"> Les animaux à l'adoption</h1>
        <div className="colonneGaucheChatTabletLand">
          <div className="imageDecoTabletLand"><img src={chaton} alt="deco" className="chatonTabletLand" /></div>
          <div className="formFilterTabletLand">
            <p>Filtrer votre recherche</p>
            <SearchSpecies search={searchSpecies} setSearch={setSearchSpecies}/>
            <SearchDepart search={searchGender} setSearch={setSearchGender} />
          </div>
        </div>
        <div className="flexdroiteTabletLand">
          <div className="colonneDroiteLesAnimauxTabletLand">
            { animalsFiltered.map((animal) => (
              <div key={animal.id} className="cardAnimalsTabletLand">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animal.picture1}`} className="imageAnimalTabletLand" alt="l'annimal" />
                <div className="divTitleTabletLand">
                  <div className="titleTabletLand">{animal.name}</div>
                  {(animal.gender === 'Femelle') && (
                    <div>
                      <IoMdFemale className="logoGenderTabletLand" />
                    </div>
                  )}
                  {(animal.gender === 'Mâle') && (
                    <div>
                      <IoMdMale className="logoGenderTabletLand" />
                    </div>
                  )}
                </div>
                <div className="textTabletLand">
                  {animal.shelter.name}
                </div>
                <div className="textTabletLand">
                  {animal.description}
                </div>
                <NavLink to={`/les-animaux/${animal.id}`}> <Button className="buttonTabletLand">voir sa fiche</Button></NavLink>
              </div>
            ))}
          </div>
        </div>
      </TabletLandscape>
      <BigTablet>
        <h1 className="titlePage"> Les animaux à l'adoption</h1>
        <div className="colonneGaucheChatBigTabletLand">
          <div className="imageDecoTabletLand"><img src={chaton} alt="deco" className="chatonTabletLand" /></div>
          <div className="formFilterTabletLand">
            <p>Filtrer votre recherche</p>
            <SearchSpecies search={searchSpecies} setSearch={setSearchSpecies}/>
            <SearchDepart search={searchGender} setSearch={setSearchGender} />
          </div>
        </div>
        <div className="flexdroiteTabletLand">
          <div className="colonneDroiteLesAnimauxBigTabletLand">
            { animalsFiltered.map((animal) => (
              <div key={animal.id} className="cardAnimalsTabletLand">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animal.picture1}`} className="imageAnimalTabletLand" alt="l'annimal" />
                <div className="divTitleTabletLand">
                  <div className="titleTabletLand">{animal.name}</div>
                  {(animal.gender === 'Femelle') && (
                    <div>
                      <IoMdFemale className="logoGenderTabletLand" />
                    </div>
                  )}
                  {(animal.gender === 'Mâle') && (
                    <div>
                      <IoMdMale className="logoGenderTabletLand" />
                    </div>
                  )}
                </div>
                <div className="textTabletLand">
                  {animal.shelter.name}
                </div>
                <div className="textTabletLand">
                  {animal.description}
                </div>
                <NavLink to={`/les-animaux/${animal.id}`}> <Button className="buttonTabletLand">voir sa fiche</Button></NavLink>
              </div>
            ))}
          </div>
        </div>
      </BigTablet>
      <Tablet>
        <h1 className="titlePage"> Les animaux à l'adoption</h1>
        <div className="colonneGaucheChatTablet">
          <div className="imageDecoTabletLand"><img src={chaton} alt="deco" className="chatonTabletLand" /></div>
          <div className="formFilterTabletLand">
            <p>Filtrer votre recherche</p>
            <SearchSpecies search={searchSpecies} setSearch={setSearchSpecies}/>
            <SearchDepart search={searchGender} setSearch={setSearchGender} />
          </div>
        </div>
        <div className="flexdroiteTabletLand">
          <div className="colonneDroiteLesAnimauxTablet">
            { animalsFiltered.map((animal) => (
              <div key={animal.id} className="cardAnimalsTabletLand">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animal.picture1}`} className="imageAnimalTabletLand" alt="l'annimal" />
                <div className="divTitleTabletLand">
                  <div className="titleTabletLand">{animal.name}</div>
                  {(animal.gender === 'Femelle') && (
                    <div>
                      <IoMdFemale className="logoGenderTabletLand" />
                    </div>
                  )}
                  {(animal.gender === 'Mâle') && (
                    <div>
                      <IoMdMale className="logoGenderTabletLand" />
                    </div>
                  )}
                </div>
                <div className="textTabletLand">
                  {animal.shelter.name}
                </div>
                <div className="textTabletLand">
                  {animal.description}
                </div>
                <NavLink to={`/les-animaux/${animal.id}`}> <Button className="buttonTabletLand">voir sa fiche</Button></NavLink>
              </div>
            ))}
          </div>
        </div>
      </Tablet>
      <MobileLandscape>
        <h1 className="titlePage"> Les animaux à l'adoption</h1>
        <div className="colonneGaucheChatMobileLand">
          <div className="formFilterMobileLand">
            <p>Filtrer votre recherche</p>
            <SearchSpecies search={searchSpecies} setSearch={setSearchSpecies}/>
            <SearchDepart search={searchGender} setSearch={setSearchGender} />
          </div>
        </div>
        <div className="flexdroiteMobileLand">
          <div className="colonneDroiteLesAnimauxMobileLand">
            { animalsFiltered.map((animal) => (
              <div key={animal.id} className="cardAnimalsTabletLand">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animal.picture1}`} className="imageAnimalTabletLand" alt="l'annimal" />
                <div className="divTitleTabletLand">
                  <div className="titleTabletLand">{animal.name}</div>
                  {(animal.gender === 'Femelle') && (
                    <div>
                      <IoMdFemale className="logoGenderTabletLand" />
                    </div>
                  )}
                  {(animal.gender === 'Mâle') && (
                    <div>
                      <IoMdMale className="logoGenderTabletLand" />
                    </div>
                  )}
                </div>
                <div className="textTabletLand">
                  {animal.shelter.name}
                </div>
                <div className="textTabletLand">
                  {animal.description}
                </div>
                <NavLink to={`/les-animaux/${animal.id}`}> <Button className="buttonTabletLand">voir sa fiche</Button></NavLink>
              </div>
            ))}
          </div>
        </div>
      </MobileLandscape>
      <Mobile>
        <h1 className="titlePage"> Les animaux à l'adoption</h1>
        <div className="colonneGaucheChatMobile">

          <div className="formFilterMobile">
            <p>Filtrer votre recherche</p>
            <SearchSpecies search={searchSpecies} setSearch={setSearchSpecies}/>
            <SearchDepart search={searchGender} setSearch={setSearchGender} />
          </div>
        </div>
        <div className="flexdroiteMobileLand">
          <div className="colonneDroiteLesAnimauxMobileLand">
            { animalsFiltered.map((animal) => (
              <div key={animal.id} className="cardAnimalsTabletLand">
                <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animal.picture1}`} className="imageAnimalTabletLand" alt="l'annimal" />
                <div className="divTitleTabletLand">
                  <div className="titleTabletLand">{animal.name}</div>
                  {(animal.gender === 'Femelle') && (
                    <div>
                      <IoMdFemale className="logoGenderTabletLand" />
                    </div>
                  )}
                  {(animal.gender === 'Mâle') && (
                    <div>
                      <IoMdMale className="logoGenderTabletLand" />
                    </div>
                  )}
                </div>
                <div className="textTabletLand">
                  {animal.shelter.name}
                </div>
                <div className="textTabletLand">
                  {animal.description}
                </div>
                <NavLink to={`/les-animaux/${animal.id}`}> <Button className="buttonTabletLand">voir sa fiche</Button></NavLink>
              </div>
            ))}
          </div>
        </div>
      </Mobile>
    </div>
  );
};
LesAnimaux.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


export default LesAnimaux;

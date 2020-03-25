import React, { useState, useEffect } from 'react';
import { Button, Carousel, Card, Row, Col } from 'react-bootstrap';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';

import chaton from 'src/assets/images/chaton.png';
import SearchSpecies from './SearchSpecies';
import SearchDepart from './SearchGender';

import './adminpagerefuge.css';



const AdminTousLesAnimaux = ({ user }) => {

    const [animals, setAnimals] = useState([]);
    const { id } = useParams();
    console.log(id);

    const fecthAnimal = () => {
      axios.get(`http://3.80.197.234/projet-orefuge-back/public/api/shelters/${id}/animals`)
        .then((response) => {
          setAnimals(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(`erreur:${error}`);
        })
        .finally(() => {});
    };

    useEffect(() => {
      fecthAnimal();
    }, []);

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

    <div className="page">
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
    </div>
  );
};
AdminTousLesAnimaux.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default AdminTousLesAnimaux;

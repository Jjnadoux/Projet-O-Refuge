import React, { useEffect, useState } from 'react';
import { Button, Carousel, Card, Row, Col } from 'react-bootstrap';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { FiHeart, FiInstagram } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import pattelogo from 'src/assets/images/pattelogo.png';


import PropTypes from 'prop-types';

import './pagerefuge.css';

const PageRefuge = ({ shelter, loadShelter }) => {
  const { id } = useParams();
  useEffect(() => {
    loadShelter(id);
  }, []);

  const refuge = shelter.shelter;

  const [animals, setAnimals] = useState([]);

  axios.get(`http://3.80.197.234/projet-orefuge-back/public/api/shelters/${id}/animals`)
    .then((response) => {
      setAnimals(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.warn(error);
    })
    .finally(() => {});

  console.log(shelter.name);

  return (
    <div className="page">
      <h1 className="titlePage">Refuge</h1>
      <div className="blocRefuge">
        <h2 className="titleRefuge">{refuge.name}</h2>
        <div className="Refuge">
          <div className="logoRefuge">
            <img className="pattelogo" src={pattelogo} alt="logo d'une patte" />
            <div className="titrelogo">{refuge.name}</div>
          </div>
          <div className="descriptionRefuge">
            <p className="titledescription">Bienvenue.</p>
            <p>{refuge.description}</p>
          </div>
          <div className="rating">
            <a href="#5" title="Donner 5 étoiles">☆</a>
            <a href="#4" title="Donner 4 étoiles">☆</a>
            <a href="#3" title="Donner 3 étoiles">☆</a>
            <a href="#2" title="Donner 2 étoiles">☆</a>
            <a href="#1" title="Donner 1 étoile">☆</a>
          </div>
        </div>
        <div className="buttonBloc">
          <Button className="button">Trouver votre compagnon chez nous !</Button>
        </div>
        <div className="blocCarousel">
          <h2 className="titleRefuge">Notre refuge en image</h2>
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carou"
                  src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/shelters/${refuge.picture1}`}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carou"
                  src="https://pixabay.com/fr/images/download/cat-4864605_640.jpg?attachment"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carou"
                  src="https://pixabay.com/fr/images/download/pony-2430507_640.jpg?attachment"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <h2 className="titleRefuge">Nos Animaux</h2>
        <div className="blocNosAnimaux">
          <p className="animauxDispo">Nos animaux disponibles :</p>
          <p className="listAnimaux">Chiens, Chats, Chevaux</p>
        </div>
        <h2 className="titleRefuge">Coordonnées de notre refuge</h2>
        <div className="blocCoordonnees">
        <div className="blocCoord">
        <div className="blocAdress">
          <p>{refuge.streetNumber} {refuge.streetName}</p>
          <p>{refuge.zipcode}</p>
          <p>{refuge.city}</p>
          </div>
          <div className="hours">
          <p>Horaires d'ouvertures: {refuge.hours}</p>
          </div>
          </div>
          <div className="blocContact">
            <div className="buttonBloc">
              <Button className="button">{refuge.phoneNumber}</Button>
            </div>
            <div className="buttonBloc">
              <Button className="button">{refuge.email}</Button>
            </div>
            <div className="buttonBloc">
              <Button className="button">https://www.refuge-oclock.com</Button>
            </div>
          </div>
        </div>
        <h2 className="titleRefuge">Conditions d'adoption</h2>
        <div className="blocConditions">
          <div className="descriptiontext">
            <p>{refuge.adoptionConditions}.</p>
          </div>
        </div>
        <div className="buttonBloc">
          <Button className="button">Trouver votre compagnon chez nous !</Button>
        </div>

        <div className="socialDonation">
          <div className="social">
            <h3 className="partager">Partager !</h3>
            <div className="blocIconSocial">
              <a className="icon1" href="https://www.facebook.com/refuge.oclock"><FaFacebookSquare /></a>
              <a className="icon1" href="https://www.instagram.com/refugeoclock"><FiInstagram /></a>
              <a className="icon1" href={`mailto:${refuge.email}`}><GoMailRead /></a>
            </div>
          </div>
          <div className="donation">
            <a className="icon" href="https://www.leetchi.com"><FiHeart /></a>
            <h2 className="partager">Soutenez-nous !</h2>
          </div>
        </div>
        <h2 className="titleRefuge">Les animaux de notre refuge</h2>

          <div className="flexCarte">
            <div className="colonneDroiteLesAnimaux">
              {animals.map((animal) => (
                <div key={animal.id} className="cardAnimalsLesAnimaux">
                  <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animal.picture1}`} className="imageAnimalLesAnimaux" alt="Animal" />
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
                    {animal.description}
                  </div>
                  <NavLink to={`/les-animaux/${animal.id}`}> <Button className="buttonficheLesAnimaux">voir sa fiche</Button></NavLink>
                </div>

              ))}
            </div>
          </div>

        <div className="buttonBloc">
          <Button className="button">Trouver votre compagnon chez nous !</Button>
        </div>
      </div>
    </div>
  );
};
PageRefuge.propTypes = {

  shelter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PageRefuge;

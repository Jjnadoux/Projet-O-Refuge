import React, { useState, useEffect } from 'react';
import { Button, Carousel, Card, Row, Col } from 'react-bootstrap';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { FiHeart, FiInstagram } from 'react-icons/fi';
import { FaFacebookSquare, FaPencilAlt } from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';
import { NavLink, useParams } from 'react-router-dom';

import './adminpagerefuge.css';

import axios from 'axios';
import PropTypes from 'prop-types';


const AdminPageRefuge = ({ user }) => {
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


  return (
    <div className="page">
      <h1 className="titlePage">Espace personnel de votre Refuge</h1>
      <div className="blocRefuge">
        <h2 className="titleRefuge">Refuge "Stay Cool"</h2>
        <div className="Refuge">
          <div className="logoRefuge">
            <img className="imgLogo" src="https://pixabay.com/fr/images/download/stay-cool-3124315_640.png?attachment" alt="logodurefuge" />
          </div>
          <div className="descriptionRefuge">
            <div className="descriptiontext">
              <p>Bienvenue sur notre refuge "Stay Cool".<br/>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
              </p>
            </div>
            <div className="pen"><FaPencilAlt /></div>
          </div>
          <div className="rating">
            <a href="#5" title="Donner 5 étoiles">☆</a>
            <a href="#4" title="Donner 4 étoiles">☆</a>
            <a href="#3" title="Donner 3 étoiles">☆</a>
            <a href="#2" title="Donner 2 étoiles">☆</a>
            <a href="#1" title="Donner 1 étoile">☆</a>
          </div>
        </div>
        <div className="buttonBlocAdd">
          <p>Ajoutez votre logo</p>
          <Button className="button">Images</Button>
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
                  src="https://pixabay.com/fr/images/download/dog-1224267_640.jpg?attachment"
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
          <p className="animauxDispo">Nos animaux disponible :</p>
          <p className="listAnimaux">Chiens, Chats, Poneys, Rats, Lapins, Chevaux, Kangourous, Zebres, Koudous, Impalas</p>
        </div>
        <h2 className="titleRefuge">Coordonnées de notre refuge</h2>
        <div className="blocCoordonnees">
          <p>15 rue de là-bas</p>
          <p>00000 Ville</p>
          <p>Horaires : 09h00 à 16h00</p>
          <div className="blocContact">
            <div className="buttonBloc">
              <Button className="button">06 01 02 03 04</Button>
            </div>
            <div className="buttonBloc">
              <Button className="button">refugedelabas@orefuge.fr</Button>
            </div>
            <div className="buttonBloc">
              <Button className="button">www.refugedelabas.fr</Button>
            </div>
          </div>
        </div>
        <h2 className="titleRefuge">Conditions d'adoption</h2>
        <div className="blocConditions">
          <div className="descriptiontext">
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
            <div className="pen"><FaPencilAlt /></div>
          </div>
        </div>
        <div className="buttonBloc">
          <Button className="button">Trouver votre compagnon chez nous !</Button>
        </div>
        <div className="socialDonation">
          <div className="social">
            <h3 className="partager">Partager !</h3>
            <div className="blocIconSocial">
              <a className="icon1" href="#"><FaFacebookSquare /></a>
              <a className="icon1" href="#"><FiInstagram /></a>
              <a className="icon1" href="#"><GoMailRead /></a>
            </div>
          </div>
          <div className="donation">
            <a className="icon" href="#"><FiHeart /></a>
            <h2 className="partager">Soutenez-nous !</h2>
          </div>
        </div>
        <h2 className="titleRefuge">Les animaux de votre refuge</h2>

          <div className="flexCarte">
            <div className="colonneDroiteLesAnimaux">
              {animals.map((animal) => (
                <div key={animal.id} className="cardAnimalsLesAnimaux">
                  <img src={animal.picture1} className="imageAnimalLesAnimaux" alt="Animal" />

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
AdminPageRefuge.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default AdminPageRefuge;

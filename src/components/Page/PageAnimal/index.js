import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FaCat, FaDog, FaBaby, FaFacebookSquare, FaPencilAlt } from 'react-icons/fa';
import { FiHeart, FiInstagram } from 'react-icons/fi';
import { FaBriefcaseMedical, FaBlind } from 'react-icons/fa';
import { GoMailRead, GoAlert } from 'react-icons/go';

import { NavLink } from 'react-router-dom';

import { Row, Col, Button, Accordion, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import moment from 'moment';

import './pageAnimal.css';


const PageAnimal = ({ animal, loadAnimal, shelterPage }) => {
  const { id } = useParams();
  useEffect(() => {
    loadAnimal(id);
  }, []);
  moment.locale('fr');
  const animalPage = animal.animal;
  const tags = animal.animal.tags;
 console.log({tags});

 
  return (
    <div className="container">
      <h1 className="titlePage">Je m'appelle {animalPage.name}</h1>
      <Row className="contenu">
        <Col lg={4} className="colonneGauche1Annimal">
          <div className="description">
            <p>{animalPage.description}</p><br />
            <p>Je suis né{(animalPage.gender === 'Femelle') ? 'e' : ''} le {moment(animalPage.birthdate).format('LL')} </p><br />
            <h3 className="titlePart">Mes particularités</h3>
            <div className="blocIconAnimal">
              {tags.map((tag) => (
                <div>
                  {(tag.name === "Urgent") && (
                    <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id="top">
                        Adoption urgente
                      </Tooltip>
                    }>
                      <GoAlert className="iconUrgent icon-item" />
                    </OverlayTrigger>
                  )}
                  {(tag.name === "Malade") && (
                    <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id="top">
                        Besoin de soins
                      </Tooltip>
                    }>
                      <FaBriefcaseMedical className="icon-item" />
                    </OverlayTrigger>
                  )}
                  {(tag.name === "Vieux") && (
                     <OverlayTrigger
                     key="top"
                     placement="top"
                     overlay={
                       <Tooltip id="top">
                         Animal agé
                       </Tooltip>
                     }>
                       <FaBlind className="icon-item" />
                    </OverlayTrigger>
                  )}
                 {(tag.name == null) &&(
                   <p>Aucune particularité</p>
                 )}

                </div>
                ))}
                
            </div>
            
                <h3 className="titlePart">Mes affinités</h3>
                <div className="blocIconAnimal">
                {animalPage.dogFriendly && (
                  <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id="top">
                      Ami avec les chiens
                    </Tooltip>
                  }>
                <div><FaDog className="icon-item" /></div></OverlayTrigger>
                )}
                {animalPage.catFriendly && (
                  <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id="top">
                      Ami avec les chats
                    </Tooltip>
                  }>
                  <div><FaCat className="icon-item" /></div></OverlayTrigger>
                )} 
                {animalPage.childFriendly && (
                  <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id="top">
                      ok avec les enfants
                    </Tooltip>
                  }>
                 <div><FaBaby className="icon-item"/></div></OverlayTrigger>
                )} 
                </div>
              </div>
      
          <div className="infoRefuge">
            <h3>Mon refuge</h3>
            <p>{animalPage.shelter.name}</p>
            <p>J'y suis depuis le {moment(animalPage.arrivalDate).format('LL')}</p>
            <div className="buttonRefuge">
              <Accordion className="accordeon" defaultActiveKey="0">
                <Card className="accordeonCard">
                  <Accordion.Toggle className="accordeonCard" as={Card.Header} eventKey="1">
                    Contacter le refuge
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="accordeonCard">
                      <div>Par mail: maildurefuge@gmail.com</div>
                      <div>Par téléphone: 01.45.12.06.87</div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
          <div className="buttonRefuge">
            <NavLink to={`/les-animaux`}> <Button className="button">Retour aux résultats </Button></NavLink>
          </div>
        </Col>
        <div className="colonneDroite">
          <img src={`http://3.80.197.234/projet-orefuge-back/public/uploads/images/animals/${animalPage.picture1}`} alt="AnimalPhoto" className="photoAnimal" />
          <h2 className="soustitre">Informations complémentaires</h2>
          <p className="infoCompl">{animalPage.additionalInformation}</p>
          
          <div className="socialPageAnimal">
            <h3 className="partagerPageAnimal">Partager !</h3>
            <div className="blocIconSocial">
              <a className="icon1" href="#"><FaFacebookSquare /></a>
              <a className="icon1" href="#"><FiInstagram /></a>
              <a className="icon1" href="#"><GoMailRead /></a>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

PageAnimal.propTypes = {
  animal: 
    PropTypes.shape({
      
      name: PropTypes.string.isRequired,
    }).isRequired,

};
export default PageAnimal;

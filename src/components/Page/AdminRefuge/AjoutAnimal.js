import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { MdAddAPhoto } from 'react-icons/md';

import './ajoutAnimal.css';

const AjoutAnimal = () => (
  <div className="page">
    <h1 className="titlePage">Espace personnel de votre Refuge</h1>
    <div className="blocAjoutAnimal">
      <h2 className="titleRefuge">Ajoutez un animal</h2>
      <Form>
        <Form.Group className="genre" controlId="newAnimal">
          <Form.Label>Nom de l'animal</Form.Label>
          <Form.Control placeholder="ex: Beuddy" />
        </Form.Group>
        <Form.Group className="genre" controlId="description">
          <Form.Label>Description de l'animal</Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="ex: Beuddy est un chien très joueur etc..." />
        </Form.Group>
        <Form.Group className="genre" controlId="newAnimal">
          <Form.Label>Date de naissance de l'animal</Form.Label>
          <Form.Control placeholder="ex: 15/06/2020" />
        </Form.Group>
        <Form.Group className="genre" controlId="newAnimal">
          <Form.Label>Date d'arrivée de l'animal</Form.Label>
          <Form.Control placeholder="ex: 31/08/2020" />
        </Form.Group>
      </Form>
      <div className="blocN2">
        <div key="inline" className="ListEspece" >
          <h2 className="genre">Genre</h2>
          <Form.Check inline label="Chien" id="inline" />
          <Form.Check inline label="Chat" id="inline" />
          <Form.Check inline label="Furet" id="inline" />
          <Form.Check inline label="Lapin" id="inline" />
          <Form.Check inline label="Rongeur" id="inline" />
          <Form.Check inline label="Cheval" id="inline" />
          <Form.Check inline label="Reptile" id="inline" />
          <Form.Check inline label="Animaux de ferme" id="inline" />
          <Form.Check inline label="Oiseaux" id="inline" />
          <Form.Check inline label="Autres" id="inline" />
          <h2 className="genre">Sexe</h2>
          <Form.Check inline label="Femelle" id="inline" />
          <Form.Check inline label="Mâle" id="inline" />
          <h2 className="genre">Affinité</h2>
          <Form.Check inline label="Dog Friendly" id="inline" />
          <Form.Check inline label="Cat Friendly" id="inline" />
          <Form.Check inline label="Child Friendly" id="inline" />
        </div>
      </div>
      <h2 className="titleRefuge">Ajoutez des photos / vidéos pour mettre en valeur l'animal</h2>
      <div className="bloc10">
          <div className="colonneGau">
            <p className="iconImg"><MdAddAPhoto /></p>
            <div className="buttonBloc">
              <Button className="button"> Cliquez ici pour ajouter des photos / vidéos  </Button>
            </div>
          </div>
        <div className="colonneDroi">
          <p className="textConseil">N'hésitez pas à ajouter plusieurs photos et vidéos pour mettre l'animal en valeur afin qu'il trouve une famille rapidement.</p>
        </div>
      </div>
      <div className="buttonBloc">
        <Button className="button"> Enregistrer mes informations </Button>
      </div>
    </div>
  </div>
);

export default AjoutAnimal;


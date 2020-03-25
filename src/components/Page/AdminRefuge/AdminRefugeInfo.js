import React from 'react';
import { Tab, Tabs, Col, Form, Button } from 'react-bootstrap';

import './adminrefuge.css';

const AdminRefugeInfo = ({ user }) => (
  <div className="page">
    <h1 className="titlePage">Informations personnelles</h1>
    <div className="inscriptionBloc">
      <Form>
        <Form.Group controlId="NomDuRefuge">
          <Form.Label>Nom du refuge</Form.Label>
          <Form.Control placeholder="Refuge" />
        </Form.Group>
        <Form.Group controlId="contact">
          <Form.Label>Contact Principal</Form.Label>
          <Form.Control type="Name" placeholder="Nom du contact Principal" />
        </Form.Group>
        <Form.Group controlId="AdresseRefuge">
          <Form.Label>Adresse du Refuge</Form.Label>
          <Form.Control placeholder="ex: 102 Avenue des fleurs" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="Ville">
            <Form.Label>Ville</Form.Label>
            <Form.Control type="ville" placeholder="ex: Bordeaux" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Code Postal</Form.Label>
            <Form.Control type="Code Postal" placeholder="ex: 33000" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Téléphone Fixe</Form.Label>
            <Form.Control type="telephone" placeholder="Téléphone Fixe" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Téléphone Mobile</Form.Label>
            <Form.Control type="telephone" placeholder="Téléphone Mobile" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="Mail">
          <Form.Label>Saisissez votre adresse Mail</Form.Label>
          <Form.Control placeholder="ex: refuge@refuge.fr" />
        </Form.Group>
        <Form.Group controlId="SiteInternet">
          <Form.Label>Site Internet ou Blog du Refuge</Form.Label>
          <Form.Control placeholder="ex: www.votrerefuge.fr" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridNumberPhone">
            <Form.Label>Numéro de SIRET</Form.Label>
            <Form.Control placeholder="Numéro de SIRET" />
          </Form.Group>
        </Form.Row>
        <div className="buttonBloc">
          <Button className="button">Enregistrer mes modifications</Button>
        </div>
      </Form>
    </div>
    <h1 className="titlePage">Réseaux sociaux</h1>
    <div className="inscriptionBloc">
      <Form>
        <Form.Group controlId="SiteInternet">
          <Form.Label>Site Internet ou Blog du Refuge</Form.Label>
          <Form.Control placeholder="ex: www.votrerefuge.fr" />
        </Form.Group>

        <Form.Group controlId="SiteInternet">
          <Form.Label>Page Facebook de votre Refuge</Form.Label>
          <Form.Control placeholder="ex: http://www.facebook.com/NOMDEVOTRECOMPTE " />
        </Form.Group>

        <Form.Group controlId="SiteInternet">
          <Form.Label>Page Instagram de votre Refuge</Form.Label>
          <Form.Control placeholder="ex: http://www.instagram.com/NOMDEVOTRECOMPTE" />
        </Form.Group>

        <Form.Group controlId="SiteInternet">
          <Form.Label>Lien vers votre page de donation</Form.Label>
          <Form.Control placeholder="ex: www.votreRefugeDonation.fr" />
        </Form.Group>
        <div className="buttonBloc">
          <Button className="button">Enregistrer mes modifications</Button>
        </div>
      </Form>
    </div>
  </div>
);

export default AdminRefugeInfo;

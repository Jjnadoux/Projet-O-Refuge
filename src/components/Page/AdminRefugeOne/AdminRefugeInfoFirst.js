
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Field from 'src/components/Field';

import '../AdminRefuge/adminrefuge.css';


const AdminRefugeInfoFirst = ({
  user,
  name,
  firstname,
  lastname,
  street_number,
  street_name,
  zipcode,
  city,
  department_id,
  phone_number,
  mobile_phone,
  email,
  link_website,
  siret_number,
  shelterAdded,
  handleAddShelter,
  changeAddShelterField,

}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submit de Settings');
    handleAddShelter();


  
  return (
  <div className="page">
    <h1 className="titlePage">Informations personnelles</h1>
    <div className="inscriptionBloc">
      {!shelterAdded && (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="NomDuRefuge">
          <Form.Label>Nom du refuge</Form.Label>
          <Field type="text" placeholder="Refuge" name="name" value={name} onChange={changeAddShelterField} />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="Ville">
            <Form.Label>Prénom</Form.Label>
            <Field type="text" placeholder="prénom" name="fistname" value={firstname} onChange={changeAddShelterField} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nom</Form.Label>
            <Field type="text" placeholder="nom" name="lastname" value={lastname} onChange={changeAddShelterField} />
          </Form.Group>
        </Form.Row>
        <Row>
          <Col lg={3}>
            <Form.Group controlId="Ville">
              <Form.Label>N°</Form.Label>
              <Field type="number" placeholder="n°" name="street_number" value={street_number} onChange={changeAddShelterField} />
            </Form.Group>
          </Col>
          <Col lg={9}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>nom de la rue</Form.Label>
              <Field type="text" placeholder="nom" name="street_name" value={street_name} onChange={changeAddShelterField} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Row>
          <Form.Group as={Col} controlId="Ville">
            <Form.Label>Ville</Form.Label>
            <Field type="ville" placeholder="ex: Bordeaux" name="city" value={city} onChange={changeAddShelterField} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Code Postal</Form.Label>
            <Form.Control type="Code Postal" placeholder="ex: 33000" name="zipcode" value={zipcode} onChange={changeAddShelterField} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>département</Form.Label>
            <Field type="number" name="department_id" value={department_id} onChange={changeAddShelterField} placeholder='' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Téléphone Fixe</Form.Label>
            <Field type="tel" placeholder="Téléphone Fixe" name="phone_number" value={phone_number} onChange={changeAddShelterField} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Téléphone Mobile</Form.Label>
            <Field type="tel" placeholder="Téléphone Mobile" name="mobile_phone" value={mobile_phone} onChange={changeAddShelterField} />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="Mail">
          <Form.Label>Saisissez votre adresse Mail</Form.Label>
          <Field placeholder="ex: refuge@refuge.fr" type="email" name="email" value={email} onChange={changeAddShelterField} />
        </Form.Group>
        <Form.Group controlId="SiteInternet">
          <Form.Label>Site Internet ou Blog du Refuge</Form.Label>
          <Field placeholder="ex: www.votrerefuge.fr" type="url" name="link_website" value={link_website} onChange={changeAddShelterField} />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridNumberPhone">
            <Form.Label>Numéro de SIRET</Form.Label>
            <Field placeholder="Numéro de SIRET" name="siret_number" value={siret_number} onChange={changeAddShelterField} />
          </Form.Group>
        </Form.Row>

        <div className="buttonBloc">
          <Button className="button" type="submit">Enregistrer mes modifications</Button>
        </div>
      </Form>
      )}
      {shelterAdded && (
        <div>
          <p>Vous avez bien enregistrer votre refuge</p>
        </div>
      )}
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
          <Button type="submit" className="button">Enregistrer mes modifications</Button>
        </div>
      </Form>
    </div>
  </div>
);


  };

export default AdminRefugeInfoFirst;

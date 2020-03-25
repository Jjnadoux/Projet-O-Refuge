import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

import Field from 'src/components/Field';

import './popup.css';

const PopUp = ( props ) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submit de Settings');
    props.handleContact();
  };
  return (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title className="titleHeader" id="contained-modal-title-vcenter">
        Contactez-nous
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {!props.contactOk && (
      <Form className="blocForm" onSubmit={handleSubmit}>
        <Row>
          <Col className="blocSpace">
            <Form.Label>Prénom</Form.Label>
            <Field placeholder="Prénom" type="text" name="firstname" value={props.firstname} onChange={props.changeContactField} />
          </Col>
          <Col className="blocSpace">
            <Form.Label>Nom</Form.Label>
            <Field placeholder="Nom" type="text" name="lastname" value={props.lastname} onChange={props.changeContactField} />
          </Col>
        </Row>
        
        <Row>
          <Col className="blocSpace">
            <Form.Label>Email</Form.Label>
            <Field type="text" name="email" value={props.email} onChange={props.changeContactField} placeholder="votre email" />
          </Col>
        </Row>
        <Form.Label className="blocSpace1">Vous nous contactez en tant que:</Form.Label>
        <Row>
          <Field type="select" name="profile" value={props.profile} onChange={props.changeContactField}>
            <option>particulier</option>
            <option>refuge</option>
          </Field>
        </Row>
        <Row>
          <Col className="blocSpace">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Votre message</Form.Label>
              <Field type="textarea" name="message" value={props.message} onChange={props.changeContactField} rows="4" />
            </Form.Group>
          </Col>
        </Row>
        <Button className="button" type="submit" >Envoyer</Button>
        
      </Form>
      )}
      {props.contactOk && (
        <div className="successContact">
          <p>Votre message a bien été envoyé, nous vous répondrons le plus rapidement possible. Une copie de votre message vous a été envoyée par mail</p>
        </div>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide} variant="">Annuler</Button>
    </Modal.Footer>
  </Modal>
      );
  };   
export default PopUp;

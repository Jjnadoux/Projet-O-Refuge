import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

import Field from 'src/components/Field';

import './inscription.css';

const Inscription = ({
  username,
  password,
  changeSubscribeField,
  handleSubcribe,
  error,
  isSubscribed,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submit de Settings');
    handleSubcribe();
  };
  return (
    <div className="page">
      <h1 className="titlePage">Inscription</h1>
      {!isSubscribed && (
      <div className="inscriptionBloc">
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Adresse Mail</Form.Label>
            <Field type="email" placeholder="Entrez votre email" value={username} onChange={changeSubscribeField} name="username" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Saisissez un mot de passe</Form.Label>
              <Field type="password" placeholder="Saisissez un mot de passe" value={password} onChange={changeSubscribeField} name="password" />
            </Form.Group>
            {/* <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Saisissez à nouveau ce mot de passe</Form.Label>
              <Field type="password" placeholder="Saisissez à nouveau ce mot de passe" />
            </Form.Group> */}
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="En cochant cette case vous certifiez être un refuge agrée et acceptez les condition d'utilisation." />
          </Form.Group>
          {error && (
            <div className="error">
              <p>Votre adresse mail est déjà enregistrée, pensez à activer votre compte</p>
            </div>
          )}

          <div className="buttonBloc">
            <Button className="button" type="submit">Inscription</Button>
          </div>
        </Form>
       
      </div>
      )}
      {isSubscribed && (
        <div className="inscriptionBlocOk">
          <p>Merci ! Votre inscription a bien été prise en compte, vous allez recevoir un mail pour activer votre compte </p>
          <p className="infoMail">Pensez à vérifier vos courriers indésirables</p>
        </div>
      )}
    </div>
  );
};
export default Inscription;

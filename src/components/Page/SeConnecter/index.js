import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

import Field from 'src/components/Field';

import './seconnecter.css';

const SeConnecter = ({
  username,
  password,
  error,
  isLogged,
  changeLoginField,
  handleLogin,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submit de Settings');
    handleLogin();
  };
  return (
    <div className="page">
      <h1 className="titlePage">Connexion</h1>
      {!isLogged && (
        <div className="formConnexion">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Adresse Mail</Form.Label>
              <Field
                placeholder="Adresse Mail"
                className="champs"
                type="email"
                name="username"
                value={username}
                onChange={changeLoginField}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Field
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={password}
                onChange={changeLoginField}
              />
            </Form.Group>
            <div className="blocMDPoublie">
              <a href="#" className="MDPoublie">Mot de passe oublié</a>
            </div>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Restez connecté" />
            </Form.Group>
            {error && (
              <div className="messageError">
                <p>L'identifiant ou le mot de passe est incorrecte</p>
              </div>
            )}
            <div className="buttonBloc">
              <Button className="button" type="submit">Connexion</Button>
            </div>
          </Form>
        </div>
      )}
      {isLogged && (
      <div className="formConnexion Logged">
        <Zoom><p className="conexpara">Bienvenue</p></Zoom>
        <Zoom><p className="conexpara">Vous êtes connecté !!</p></Zoom>
        <div className="blocNavCo">
          <NavLink className="countLink" to="/ajout_Refuge"><Button className="button">Créer votre refuge</Button></NavLink>
          <NavLink className="countLink" to="/AdminRefuge/:id"><Button className="button">Accéder à votre espace</Button></NavLink>
        </div>
      </div>
      )}
      {!isLogged && (
        <div>
          <h1 className="titlePage">Inscription</h1>
          <div className="inscriptionLink">
            <p>Si vous êtes un refuge et que vous souhaitez gagner en visibilité gratuitement, cliquez sur le bouton d'inscription afin de rejoindre O'Refuge.</p>   <br />
            <div className="buttonBloc">
              <NavLink
                to="/inscription"
                exact
              >
                <Button className="button">Inscription</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default SeConnecter;

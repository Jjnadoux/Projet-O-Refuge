import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './field.css';

/*
Composant contrôlé : au lieu de stocker la valeur dans le DOM, on la remonte au
composant parent. Le composant contrôlé a donc une prop qui représente la valeur
et une prop (type func) qui permet de mettre à jour la valeur. Dès que l'utilisateur
fait une action, le composant contrôlé remonte la nouvelle valeur avec la prop
callback.
https://fr.reactjs.org/docs/forms.html#controlled-components
*/

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (event) => {
    // informations à remonter à App : nouvelle valeur et name du champ
    onChange(event.target.value, name);

  };
  const inputId = `field-${name}`;
  return (
    <div className="input-container">
      
      <Form.Control
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />
     
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// on peut donner des valeurs par défaut à nos props, ici si on ne fournit pas de
// valeur pour la prop type, ça vaudra "text"
Field.defaultProps = {
  type: 'text',
  value: '',
};


export default Field;

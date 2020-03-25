import React from 'react';

import { Form } from 'react-bootstrap';


const SearchRegion = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Sélectionner une Région</Form.Label>
        <Form.Control as="select" onChange={handleChange} value={search}>
          <option>Choisir...</option>
          <option>Ile-de-France</option>
          <option>Bourgogne-Franche-Comté</option>
          <option>Nouvelle-Aquitaine</option>
          <option>Hauts-de-France</option>
          <option>Auvergne-Rhône-Alpes</option>
          <option>Bretagne</option>
          <option>Normandie</option>
          <option>Corse</option>
          <option>Occitanie</option>
          <option>Centre-Val de Loire</option>
          <option>Pays de la Loire</option>
          <option>Grand Est</option>
          <option>Provence-Alpes-Côte d'Azur</option>

         
        </Form.Control>
      </Form.Group>
    </Form>
  );
};
export default SearchRegion;



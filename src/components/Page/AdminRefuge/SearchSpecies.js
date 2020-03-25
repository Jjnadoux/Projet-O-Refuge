import React from 'react';
import { Form } from 'react-bootstrap';

const SearchSpecies = ({ search, setSearch }) => {

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Espèce</Form.Label>
        <Form.Control as="select" onChange={handleChange} value={search} >
          <option value="Tous" >Tous</option>
          <option value="Chien">Chien</option>
          <option value="Chat">Chat</option>
          <option value="Lapin">Lapin</option>
          <option value="Rongeur">Rongeur</option>
          <option value="Furet">Furet</option>
          <option value="Cheval">Cheval</option>
          <option value="Animaux de la ferme">Animaux de la ferme</option>
          <option value="Reptile">Reptile</option>
          <option value="Oiseau">Oiseau</option>
          <option value="Autre">Autre</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SearchSpecies;

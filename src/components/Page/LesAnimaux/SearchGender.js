import React from 'react';
import { Form } from 'react-bootstrap';

const SearchGender = ({ search, setSearch }) => {

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Sexe</Form.Label>
        <Form.Control onChange={handleChange} as="select" name="genre" value={search}>
          <option>Choisir...</option>
          <option>Femelle</option>
          <option>Mâle</option>
          
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SearchGender;

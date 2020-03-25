import React from 'react';

import { Form } from 'react-bootstrap';


const SearchDepart = ({ search, setSearch }) => {

  
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.targed.value);
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Sélectionner un département</Form.Label>
        <Form.Control as="select" onChange={handleChange} value={search}>
          <option>Choisir...</option>
          <option>Aisne</option>
          <option>Allier</option>
          <option>Alpes de Haute-Provence</option>
          <option>Hautes-Alpes</option>
          <option>Alpes-Maritimes</option>
          <option>Ardêche</option>
          <option>Ardennes</option>
          <option>Ariège</option>
          <option>Aube</option>
          <option>Aude</option>
          <option>Aveyron</option>
          <option>Bouches-du-Rhône</option>
          <option>Calvados</option>
          <option>Cantal</option>
          <option>Charente</option>
          <option>Charente-Maritime</option>
          <option>Cher</option>
          <option>Corrèze</option>
          <option>Corse-du-Sud</option>
          <option>Haute-Corse</option>
          <option>Côte-d'Or</option>
          <option>Côtes d'Armor</option>
          <option>Creuse</option>
          <option>Dordogne</option>
          <option>Doubs</option>
          <option>Drôme</option>
          <option>Eure</option>
          <option>Eure-et-Loir</option>
          <option>Finistère</option>
          <option>Gard</option>
          <option>Haute-Garonne</option>
          <option>Gers</option>
          <option>Gironde</option>
          <option>Hérault</option>
          <option>Île-et-Vilaine</option>
          <option>Indre</option>
          <option>Indre-et-Loire</option>
          <option>Isère</option>
          <option>Jura</option>
          <option>Landes</option>
          <option>Loir-et-Cher</option>
          <option>Loire</option>
          <option>Haute-Loire</option>
          <option>Loire-Atlantique</option>
          <option>Loiret</option>
          <option>Lot</option>
          <option>Lot-et-Garonn</option>e
          <option>Lozère</option>
          <option>Maine-et-Loire</option>
          <option>Manche</option>
          <option>Marne</option>
          <option>Haute-Marne</option>
          <option>Mayenne</option>
          <option>Meurthe-et-Moselle</option>
          <option>Meuse</option>
          <option>Morbihan</option>
          <option>Moselle</option>
          <option>Nièvre</option>
          <option>Nord</option>
          <option>Oise</option>
          <option>Orne</option>
          <option>Pas-de-Calais</option>
          <option>Puy-de-Dôme</option>
          <option>Pyrénées Atlantiques</option>
          <option>Hautes-Pyrénées</option>
          <option>Pyrénées-Orientales</option>
          <option>Bas-Rhin</option>
          <option>Haut Rhin</option>
          <option>Rhône</option>
          <option>Haute-Saône</option>
          <option>Saône-et-Loire</option>
          <option>Sarthe</option>
          <option>Savoie</option>
          <option>Haute-Savoie</option>
          <option>Paris</option>
          <option>Seine-Maritime</option>
          <option>Seine-et-Marne</option>
          <option>Yvelines</option>
          <option>Deux-Sèvres</option>
          <option>Somme</option>
          <option>Tarn</option>
          <option>Tarn-et-Garonne</option>
          <option>Var</option>
          <option>Vaucluse</option>
          <option>Vendée</option>
          <option>Vienne</option>
          <option>Haute-Vienne</option>
          <option>Vosges</option>
          <option>Yonne</option>
          <option>Territoire-de-Belfort</option>
          <option>Essonne</option>
          <option>Hauts-de-Seine</option>
          <option>Seine-Saint-Denis</option>
          <option>Val-de-Marne</option>
          <option>Val-d'Oise</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};
export default SearchDepart;


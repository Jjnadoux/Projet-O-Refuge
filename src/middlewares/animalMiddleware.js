import axios from 'axios';


import { FETCH_ANIMAL, saveAnimal } from 'src/actions/animal';

const animalMiddleware = (store) => (next) => (action) => {
    console.log(action);
  
    switch (action.type) {
    case FETCH_ANIMAL:
      axios.get(`http://3.80.197.234/projet-orefuge-back/public/api/animals/${action.id}`)
      .then((response) => {
          store.dispatch(saveAnimal(response.data[0]));
          console.log(response.data);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default animalMiddleware;

import axios from 'axios';
import { FETCH_ANIMALS, saveAnimals } from 'src/actions/animals';

const animalsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANIMALS:
      axios.get('http://3.80.197.234/projet-orefuge-back/public/api/animals')
        .then((response) => {
          store.dispatch(saveAnimals(response.data));
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

export default animalsMiddleware;

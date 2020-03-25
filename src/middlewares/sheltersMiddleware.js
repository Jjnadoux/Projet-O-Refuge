import axios from 'axios';
import { FETCH_SHELTERS, saveShelters } from 'src/actions/shelters';

const sheltersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHELTERS:
      axios.get('http://3.80.197.234/projet-orefuge-back/public/api/shelters')
        .then((response) => {
          store.dispatch(saveShelters(response.data));
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

export default sheltersMiddleware;

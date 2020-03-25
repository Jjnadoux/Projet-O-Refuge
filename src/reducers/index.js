import { combineReducers } from 'redux';

// on importe tous les reducers
import shelterReducer from './shelter';
import animalReducer from './animal';
import animalsReducer from './animals';
import sheltersReducer from './shelters';
import loginReducer from './login';
import subscribeReducer from './subscribe';
import addShelterReducer from './addShelter';
import contactReducer from './contact';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  contact: contactReducer,
  login: loginReducer,
  shelter: shelterReducer,
  animal: animalReducer,
  animals: animalsReducer,
  shelters: sheltersReducer,
  subscribe: subscribeReducer,
  addShelter: addShelterReducer,
});

// pour accéder au state il faudra indiquer le nom correspondant
// par exemple si ici on avait state.info, ça devient state.recipes.info

export default rootReducer;

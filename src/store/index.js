import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import animalMiddleware from 'src/middlewares/animalMiddleware';
import shelterMiddleware from 'src/middlewares/shelterMiddleware';
import animalsMiddleware from 'src/middlewares/animalsMiddleware';
import sheltersMiddleware from 'src/middlewares/sheltersMiddleware';
import loginMiddleware from 'src/middlewares/loginMiddleware';
import subscribeMiddleware from 'src/middlewares/subscribeMiddleware';
import contactMiddleware from 'src/middlewares/contactMiddleware';

import reducer from 'src/reducers';



const enhancers = composeWithDevTools(
  applyMiddleware(
    contactMiddleware,
    loginMiddleware,
    animalMiddleware,
    shelterMiddleware,
    animalsMiddleware,
    sheltersMiddleware,
    subscribeMiddleware,

  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;

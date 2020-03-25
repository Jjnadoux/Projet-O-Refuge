import { SAVE_ANIMALS } from '../actions/animals';

const initialState = {
  animals: [],
  loading: true,

};

const animals = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ANIMALS:
      return {
        ...state,
        animals: action.newAnimals,
        loading: false,
      };

    default:
      return state;
  }
};

export default animals;

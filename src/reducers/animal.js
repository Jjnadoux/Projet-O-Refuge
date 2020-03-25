import { SAVE_ANIMAL } from '../actions/animal';

const initialState = {
  animal: {
    tags: [],

    shelter: {},


  },
  id: null,


};

const animal = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ANIMAL:
      return {
        ...state,
        animal: action.newAnimal,
        id: action.newId,

      };

    default:
      return state;
  }
};

export default animal;

import { SAVE_SHELTERS } from '../actions/shelters';

const initialState = {
  shelters: [],
  loading: true,

};

const shelters = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SHELTERS:
      return {
        ...state,
        shelters: action.newShelters,
        loading: false,
      };

    default:
      return state;
  }
};

export default shelters;

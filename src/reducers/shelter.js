import { SAVE_SHELTER } from '../actions/shelter';

const initialState = {
  shelter: [],
  id: null,
  

};

const shelter = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SHELTER:
      return {
        ...state,
        shelter: action.newShelter,
        id: action.newId,
        
      };

    default:
      return state;
  }
};

export default shelter;
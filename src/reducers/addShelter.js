import { CHANGE_ADDSHELTER_FIELD, SAVE_ERROR, ADDSHELTER_OK } from 'src/actions/shelter';

const initialState = {
  name: '',
  firstname: '',
  lastname: '',
  street_number: '',
  street_name: '',
  zipcode: '',
  city: '',
  department_id: '',
  phone_number: '',
  mobile_phone: '',
  email: '',
  link_website: '',
  siret_number: '',
  shelterAdded: false,

};

const addShelter = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ADDSHELTER_FIELD: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case SAVE_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case ADDSHELTER_OK:
      return {
        ...state,
        shelterAdded: true,
      };
    default:
      return state;
  }
};

export default addShelter;

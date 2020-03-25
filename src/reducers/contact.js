import { CHANGE_CONTACT_FIELD, SAVE_ERROR, CONTACT_OK } from 'src/actions/contact';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  profile: 'particulier',
  message: '',
  error: false,
  contactOk: false,
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_FIELD: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }

    case SAVE_ERROR:
      return {
        ...state,
        error: true,
      };

    case CONTACT_OK:
      return {
        ...state,
        contactOk: true,
      };
      
    default:
      return state;
  }
};

export default contact;

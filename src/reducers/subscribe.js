import { CHANGE_SUBSCRIBE_FIELD, SAVE_ERROR, SUBSCRIBE_OK } from 'src/actions/subscribe';

const initialState = {
  username: '',
  password: '',
  error: false,
  isSubscribed: false,

};

const subscribe = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SUBSCRIBE_FIELD: {
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
    
      case SUBSCRIBE_OK:
      return {
        ...state,
        isSubscribed: true,
      };

    default:
      return state;
  }
};
export default subscribe;

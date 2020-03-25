import { CHANGE_LOGIN_FIELD, SAVE_USER, SAVE_ERROR, DISCONNECT_USER, SAVE_DATA_USER, HANDLE_UPLOAD } from 'src/actions/login';

const initialState = {
  username: '',
  password: '',
  isLogged: false,
  tokken: '',
  error: false,
  user: {
    selectedFile: null,
  },
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        token: action.tokken,
      };
    
    case DISCONNECT_USER:
      return {
        ...state,
        isLogged: initialState.isLogged,
        token: initialState.tokken,
      }
    case SAVE_ERROR:
      return {
        ...state,
        error: true,
      };
    case SAVE_DATA_USER:
      return {
        ...state,
        user: action.newUser,
      };
   
    case HANDLE_UPLOAD:
      return {
        ...state,
        user: action.newPicture,
      };
    default:
      return state;
  }
};
export default login;

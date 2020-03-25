export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_ERROR = 'SAVE_ERROR';
export const FETCH_USER = 'FETCH_USER';
export const SAVE_DATA_USER = 'SAVE_DATA_USER';
export const HANDLE_UPLOAD = 'HANDLE_UPLOAD';


export const changeLoginField = (name, value) => ({
  type: CHANGE_LOGIN_FIELD,
  value,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (logged, tokken) => ({
  type: SAVE_USER,
  logged,
  tokken,
});

export const disconnectUser = (logged, tokken) => ({
  type: DISCONNECT_USER,
  logged,
  tokken,
});

export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});

export const saveDataUser = (user) => ({
  type: SAVE_DATA_USER,
  newUser: user,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const handleUpload = () => ({
  type: HANDLE_UPLOAD,
});
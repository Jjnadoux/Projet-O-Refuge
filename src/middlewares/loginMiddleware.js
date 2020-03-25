import axios from 'axios';

import { LOG_IN, saveUser, saveError, saveDataUser, FETCH_USER } from 'src/actions/login';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios({
        method:'post',
        url:'http://3.80.197.234/projet-orefuge-back/public/api/login_check',
        
        data: {
          username: store.getState().login.username,
          password: store.getState().login.password,
        },
        withCredentials: false,
      })
        .then((response) => {
          store.dispatch(saveUser(response.logged, response.data.token));
          localStorage.setItem("token", response.data.token);
          console.log(response);
        })
        .catch((error) => {
          store.dispatch(saveError());
          console.warn(error);
        });
      next(action);
      break;

    case FETCH_USER:
      axios({
        method: 'get',
        url: 'http://3.80.197.234/projet-orefuge-back/public/api/oneuser',
        
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
          
        },
    })
        .then((response) => {
          store.dispatch(saveDataUser(response.data.user));
          
          console.log(response.data.user);
    })
    
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
     
    default:
      next(action);
  }
};

export default loginMiddleware;

import axios from 'axios';

import { SUBSCRIBE_USER, saveError, subscribeOk } from 'src/actions/subscribe';

const subscribeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBSCRIBE_USER:
      axios({
        method:'post',
        url:'http://3.80.197.234/projet-orefuge-back/public/api/users',
        
        data: {
          email: store.getState().subscribe.username,
          password: store.getState().subscribe.password,
        },
        withCredentials: false,
      })
        .then((response) => {
          store.dispatch(subscribeOk());
          console.log(response);
        })
        .catch((error) => {
          store.dispatch(saveError());
          console.warn(error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default subscribeMiddleware;

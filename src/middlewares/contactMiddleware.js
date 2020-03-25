import axios from 'axios';
import { CONTACT_US, saveError, contactOk } from 'src/actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case CONTACT_US:
        axios({
          method:'post',
          url:'http://3.80.197.234/projet-orefuge-back/public/api/contact',
          
          data: {
            firstname: store.getState().contact.firstname,
            lastname: store.getState().contact.lastname,
            email: store.getState().contact.email,
            profile: store.getState().contact.profile,
            message: store.getState().contact.message,
          },
          withCredentials: false,
        })
          .then((response) => {
            store.dispatch(contactOk());
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
  
  export default contactMiddleware;
  
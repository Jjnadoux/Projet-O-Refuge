import axios from 'axios';


import { FETCH_SHELTER, saveShelter, ADD_SHELTER, saveError, addShelterOk } from 'src/actions/shelter';

const shelterMiddleware = (store) => (next) => (action) => {
    
    switch (action.type) {
    case FETCH_SHELTER:
      axios.get(`http://3.80.197.234/projet-orefuge-back/public/api/shelters/${action.id}`)
        .then((response) => {
          store.dispatch(saveShelter(response.data[0]));
          console.log(response.data);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case ADD_SHELTER:
      axios({
        method: 'post',
        url: `http://3.80.197.234/projet-orefuge-back/public/api/shelters/${store.getState().login.user.id}/add`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
          
        },
        data: {
          name: store.getState().shelter.name,
          firstname: store.getState().shelter.firstname,
          lastname: store.getState().shelter.lastname,
          street_number: store.getState().shelter.street_number,
          street_name: store.getState().shelter.street_name,
          zipcode: store.getState().shelter.zipcode,
          city: store.getState().shelter.city,
          department_id: store.getState().shelter.department_id,
          phone_number: store.getState().shelter.phone_number,
          mobile_phone: store.getState().shelter.mobile_phone,
          email: store.getState().shelter.email,
          link_website: store.getState().shelter.link_website,
          siret_number: store.getState().shelter.siret_number,
        },
        withCredentials: false,
      })
        .then((response) => {
          store.dispatch(addShelterOk());
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

export default shelterMiddleware;

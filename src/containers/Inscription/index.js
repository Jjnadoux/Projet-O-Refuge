import { connect } from 'react-redux';

import { changeSubscribeField, SubscribeUser } from 'src/actions/subscribe';

import Inscription from 'src/components/Page/Inscription';


// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  // on a renommé dans le state pour pouvoir utiliser directement le 'name' du champ
  // en cas de modification
  username: state.subscribe.username,
  password: state.subscribe.password,
  error: state.subscribe.error,
  isSubscribed: state.subscribe.isSubscribed,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
  changeSubscribeField: (name, value) => {
    dispatch(changeSubscribeField(value, name));
  },
  handleSubcribe: () => {
    dispatch(SubscribeUser());
  },

});

// création du composant container
const InscriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inscription);

export default InscriptionContainer;

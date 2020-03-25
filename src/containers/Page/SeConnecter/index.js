import { connect } from 'react-redux';

import { changeLoginField, logIn } from 'src/actions/login';

import SeConnecter from 'src/components/Page/SeConnecter';

// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  // on a renommé dans le state pour pouvoir utiliser directement le 'name' du champ
  // en cas de modification
  username: state.login.username,
  password: state.login.password,
  isLogged: state.login.isLogged,
  error: state.login.error,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
  changeLoginField: (name, value) => {
    dispatch(changeLoginField(value, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },

});

// création du composant container
const SeConnecterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SeConnecter);

export default SeConnecterContainer;

import { connect } from 'react-redux';



import Connexion from 'src/components/Connexion';
import { disconnectUser } from 'src/actions/login';

// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  // on a renommé dans le state pour pouvoir utiliser directement le 'name' du champ
  // en cas de modification
  isLogged: state.login.isLogged,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
 
  handleLogout: () => {
    dispatch(disconnectUser());
  },
});

// création du composant container
const ConnexionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connexion);

export default ConnexionContainer;

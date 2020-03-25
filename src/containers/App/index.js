import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchAnimals } from 'src/actions/animals';
import { fetchShelters } from 'src/actions/shelters';



// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  loading: state.animals.loading,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
  loadAnimals: () => {
    dispatch(fetchAnimals());
  },
  loadShelters: () => {
    dispatch(fetchShelters());
  },
  
});

// création du composant container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;

// == Import npm
import React, { useEffect } from 'react';


// == Import
import Page from 'src/components/Page';

import './styles.css';

// == Composant
const App = ({ loadAnimals, loadShelters }) => {
  useEffect(() => {
    loadAnimals();
    loadShelters();
    
  }, []);

  return (

    <div className="app">
      <Page />
    </div>
  );
};

// == Export
export default App;

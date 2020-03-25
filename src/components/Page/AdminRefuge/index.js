import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Axios from 'axios';
import AdminRefugeInfo from './AdminRefugeInfo';
import AdminPageRefuge from './AdminPageRefuge';
import AdminPageAnimal from './AdminPageAnimal';
import AdminTousLesAnimaux from './AdminTousLesAnimaux';
import AjoutAnimal from './AjoutAnimal';


import './adminrefuge.css';


const AdminRefuge = ({ user, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);
  console.log(user);

  return(
  <div className="page">
    <Tabs defaultActiveKey="Mon Compte">
      <Tab eventKey="Mon Compte" title="Mon Compte">
        <AdminRefugeInfo user={user} />
      </Tab>
     
      <Tab eventKey="Mon Refuge" title="Mon Refuge">
        <AdminPageRefuge user={user}/>
      </Tab>
      
      
      <Tab eventKey="Mes Animaux" title="Mes Animaux">
        <AdminTousLesAnimaux user={user} />
      </Tab>
      
     
       
      
    
      <Tab eventKey="Ajout animal" title="Ajouter un animal">
        <AjoutAnimal user={user} />
      </Tab>
      
    </Tabs>
  </div>
);
};
export default AdminRefuge;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './page.css';

import Home from 'src/components/Page/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Connexion from 'src/containers/Connexion';

import LesRefuges from 'src/containers/Page/LesRefuges';

import PageRefuge from 'src/containers/Page/PageRefuge';

import LesAnimaux from 'src/containers/Page/LesAnimaux';
import Presentation from 'src/components/Page/Presentation';
import NosConseils from 'src/components/Page/NosConseils';
import Temoignages from 'src/components/Page/Temoignages';
import PageAnimal from 'src/containers/Page/PageAnimal';
import Error from 'src/components/Page/Error';
import AdminRefuge from 'src/containers/Page/AdminRefuge';
import MentionsLegales from 'src/components/Page/MentionsLegales';
import InscriptionOk from 'src/components/Page/InscriptionOk';
import AdminRefugeOne from 'src/containers/Page/AdminRefugeOne';
import Contact from 'src/components/Page/Contact';


import SeConnecter from 'src/containers/Page/SeConnecter';
import Inscription from 'src/containers/Inscription';

import banniere1 from 'src/assets/images/banleepippa1.png';
import banniere2 from 'src/assets/images/banpippa2.png';


const Page = () => (
  <div className="page-content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/les-refuges">
        <div className="container">
          <Header />
          <Connexion />
          <LesRefuges />
          <Footer />
        </div>
      </Route>
      <Route exact path="/les-animaux">
        <div className="container">
          <Header image={banniere1}/>
          <Connexion />
          <LesAnimaux />
          <Footer />
        </div>
      </Route>
      <Route path="/presentation">
        <div className="container">
          <Header />
          <Connexion />
          <Presentation />
          <Footer />
        </div>
      </Route>
      <Route path="/nos-conseils">
        <div className="container">
          <Header />
          <Connexion />
          <NosConseils />
          <Footer />
        </div>
      </Route>
      <Route path="/se-connecter">
        <div className="container">
          <Header />
          <Connexion />
          <SeConnecter />
          <Footer />
        </div>
      </Route>
      <Route path="/inscription">
        <div className="container">
          <Header />
          <Connexion />
          <Inscription />
          <Footer />
        </div>
      </Route>
      <Route path="/temoignages">
        <div className="container">
          <Header />
          <Connexion />
          <Temoignages />
          <Footer />
        </div>
      </Route>
      <Route path="/les-animaux/:id">
        <div className="container">
          <Header />
          <Connexion />
          <PageAnimal />
          <Footer />
        </div>
      </Route>
      <Route path="/refuge/:id">
        <div className="container">
          <Header />
          <Connexion />
          <PageRefuge />
          <Footer />
        </div>
      </Route>
      <Route path="/ajout_Refuge" exact>
        <div className="container">
          <Header />
          <Connexion />
          <AdminRefugeOne />
          <Footer />
        </div>
      </Route>
      <Route path="/AdminRefuge/:id">
        <div className="container">
          <Header />
          <Connexion />
          <AdminRefuge />
          <Footer />
        </div>
      </Route>
      
      <Route path="/MentionsLegales">
        <div className="container">
          <Header />
          <Connexion />
          <MentionsLegales />
          <Footer />
        </div>
      </Route>
      <Route path="/inscription-valide">
        <div className="container">
          <Header />
          <Connexion />
          <InscriptionOk />
          <Footer />
        </div>
      </Route>
      <Route path="/contact">
        <div className="container">
          <Header />
          <Connexion />
          <Contact />
          <Footer />
        </div>
      </Route>

      <Route>
        <div className="container">
          <Header />
          <Error />
          <Footer />
        </div>
      </Route>
    </Switch>
  </div>
);

export default Page;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import  moment  from 'moment';

/*import './pageAnimal.css';*/


const AdminPageAnimal = ({ user }) => {

const [animal, setAnimal] = useState({});
let { id }= useParams();
console.log(id);


const fecthAnimal = () => {
    axios.get(`http://3.80.197.234/projet-orefuge-back/public/api/animals/${id}`)
        .then((response) => {
            setAnimal(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error(`erreur:${error}`);
          })
        .finally(() => {});
    };

    useEffect(() => {
        fecthAnimal();
    }, []);
    moment.locale('fr');

    return(
<div className="container">
    <h1>Je m'appelle {animal.name}</h1>
    <Row className="contenu">
        <Col lg={4} className="colonneGauche">
            <div className="description">
            <p>{animal.description}</p>
            <p>Né{(animal.gender==='Femelle') ? 'e' :''} le {moment(animal.birthday).format('LL')} </p>
            
                
            </div>
        </Col>
        <Col lg={7} className="colonneDroite">
            <img src={animal.picture1} alt="Photo" className="photoAnimal"/>
            <h2 className="soustitre">Informations complémentaires</h2>
            <p>{animal.additional_information}</p>
        </Col>
    </Row>
</div>
);
    };

export default AdminPageAnimal;

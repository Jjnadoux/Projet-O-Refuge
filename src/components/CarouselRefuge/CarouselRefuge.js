import React from 'react';
import { Carousel } from 'react-bootstrap';

import './CarouselRefuge.css';

const CarouselRefuge = () => (
  <div className="carousel">
    <div className="titleRefuge">
      <h1>Derniers refuges inscrits</h1>
    </div>
    <div className="dernierRefuge">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.leparisien.fr/resizer/KMHV-4lhOj2QaXq-9-afv2TImqg=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5HB3F7VSL4G3ANBH3LLCHDKRMA.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Refuge n°1</h3>
            <p>Description du refuge</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pixabay.com/fr/images/download/bunny-1149060_640.jpg?attachment"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pixabay.com/fr/images/download/labrador-2667328_640.jpg?attachment"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default CarouselRefuge;

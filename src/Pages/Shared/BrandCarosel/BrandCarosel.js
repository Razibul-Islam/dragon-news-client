import Carousel from "react-bootstrap/Carousel";
import React from 'react';
import Brand1 from '../../../assets/brand/Brand1.png'
import Brand2 from '../../../assets/brand/Brand2.png'

const BrandCarosel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand2}
            alt="Second slide"
          />

          
        </Carousel.Item>
      </Carousel>
    );
};

export default BrandCarosel;
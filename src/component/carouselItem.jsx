import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const CarouselItem = ({srcImage}) => {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={srcImage}
            />
        </Carousel.Item>
    );
};

export default CarouselItem;
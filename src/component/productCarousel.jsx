import Carousel from 'react-bootstrap/Carousel';
import React from "react";

const productCarousel = ({srcImage}) => {
    return (
        <Carousel data-bs-theme="dark">
            {srcImage?.map((img, it) =>
                <Carousel.Item key={it}>
                <img
                    className="d-block w-100"
                    src={img}
                />
            </Carousel.Item>)
            }

        </Carousel>
    );
}

export default productCarousel;
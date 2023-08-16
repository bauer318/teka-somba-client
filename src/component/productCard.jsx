import React, {useState} from 'react';
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import BuyerModal from "./buyerModal";
import ProductCarousel from "./productCarousel";

const ProductCard = ({product, images}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Col xs={12} md={6} lg={true} className={"mb-5 ms-4"}>
            <Card style={{width: '18rem'}}>
                <ProductCarousel srcImage={images}/>
                <Card.Body>
                    <Card.Title>{product?.name}</Card.Title>
                    <Card.Text className={"i"}>
                        {product?.price} Rub
                    </Card.Text>
                    <Card.Text>
                        {product?.description}
                    </Card.Text>
                    {
                        product.available ? (<a
                            href={product?.author}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Text me...
                        </a>) : (<h4 className={'text-danger'}>Already taken</h4>)
                    }

                </Card.Body>
            </Card>
            <BuyerModal show={show} handleClose={() => handleClose()}/>
        </Col>

    );
};

export default ProductCard;
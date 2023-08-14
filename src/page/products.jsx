import React, {useEffect, useState} from 'react';
import {getItem, isExistBuyer} from "../util/util";
import axios from "axios";
import ProductCard from "../component/productCard";
import {Container, Row} from "react-bootstrap";

const baseUrl = 'http://localhost:8081/api/product';
const images = [require('../img/image.jpg'), require('../img/image2.png'), require('../img/image.jpg')];
const Products = () => {
    const [products, setProducts] = useState([]);
    const [storedBuyer, setStoredBuyer] = useState(null);
    useEffect(() => {
        if (isExistBuyer('buyer')) {
            const b = getItem('buyer');
            setStoredBuyer(b);
        }
        const allProducts = getAll();
        allProducts.then(result => {
            setProducts(result);
        })
    }, []);


    const getAll = async () => {
        try {
            const response = await axios.get(baseUrl);
            return response.data;
        } catch (error) {
            console.log(error.response);
        }
    }
    return (
        <div>
            {
                products.length > 0 ? (<Container>
                    <Row className="align-items-end">
                        {products.map((product, it) => <ProductCard key={product.productId} product={product}
                                                                    image={images[it]} buyer={storedBuyer}/>)}
                    </Row>
                </Container>) : (
                    <div><h2>Loading...</h2></div>)
            }

        </div>
    );
};

export default Products;
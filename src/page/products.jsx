import React, {useEffect, useState} from 'react';
import {getItem, isExistBuyer} from "../util/util";
import axios from "axios";
import ProductCard from "../component/productCard";
import {Container, Row} from "react-bootstrap";

const baseUrl = 'http://localhost:8081/api/product';
const images = [require('../img/image.jpg'), require('../img/image2.png'), require('../img/image.jpg')];
const productsArray = [
    {
        name: "Refrigerator",
        description:"Indesit brand. The power and other details I don't know.",
        price:6000,
        available:false,
        images:[
            require('../img/refrigerator1.jpg'),
            require('../img/refrigerator2.jpg'),
            require('../img/refrigerator3.jpg')
        ]
    },
    {
        name: "Mattress",
        description:"Подарок...",
        price:0,
        available:false,
        images:[
            require('../img/mattress.jpg'),
        ]
    },
    {
        name: "Printer/Scanner",
        description:"HP brand. Подарок",
        price:0,
        available:false,
        images:[
            require('../img/imprimante1.jpg'),
            require('../img/imprimante2.jpg')
        ]
    },
    {
        name: "Table",
        description:"Подарок...",
        price:0,
        available:false,
        images:[
            require('../img/table.jpg')
        ]
    },
    {
        name: "Chair",
        description:"Ккомпьютерное кресло",
        price:1500,
        available:false,
        images:[
            require('../img/chair.jpg')
        ]
    },
    {
        name: "Microwaves",
        description:"Микроволновая печь",
        price:1500,
        available:false,
        images:[
            require('../img/microwaves.jpg')
        ]
    },
    {
        name: "Ethernet cable",
        description:"Кабель ethernet",
        price:0,
        available:true,
        images:[
            require('../img/ethernet cable 2.jpg'),
            require('../img/ethernet cable 1.jpg')
        ]
    },
];
const Products = () => {
    return (
        <div>
            {
                productsArray.length > 0 ? (<Container>
                    <Row className="align-items-end">
                        {productsArray.map((product, it) => <ProductCard key={it} product={product}
                                                                    images={product.images}/>)}
                    </Row>
                </Container>) : (
                    <div><h2>Loading...</h2></div>)
            }

        </div>
    );
};

export default Products;
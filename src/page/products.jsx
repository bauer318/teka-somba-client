import React, {useEffect, useState} from 'react';
import {getItem, isExistBuyer} from "../util/util";
import axios from "axios";
import ProductCard from "../component/productCard";
import {Container, Row} from "react-bootstrap";

const baseUrl = 'http://localhost:8081/api/product';
const images = [require('../img/image.jpg'), require('../img/image2.png'), require('../img/image.jpg')];
const productsArray = [
    {
        name: "Mouse",
        description:"Мышь",
        price:0,
        available:true,
        images:[
            require('../img/mouse.jpg'),
        ],
        author:"https://t.me/Josafath_07"
    },
    {
        name: "Ethernet cable",
        description:"Кабель ethernet",
        price:0,
        available:true,
        images:[
            require('../img/ethernet cable 2.jpg'),
            require('../img/ethernet cable 1.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Chair",
        description:"Компьютерное кресло",
        price:1300,
        available:true,
        images:[
            require('../img/chair2.jpg'),
            require('../img/chair3.jpg')
        ],
        author:"https://t.me/Josafath_07"
    },
    {
        name: "Mattress",
        description:"Матрас",
        price:4500,
        available:true,
        images:[
            require('../img/mattress2.jpg'),
            require('../img/mattress3.jpg'),
            require('../img/mattress5.jpg')
        ],
        author:"https://t.me/Josafath_07"
    },
    {
        name: "The clothes",
        description:"Одежда",
        price:0,
        available:true,
        images:[
            require('../img/c5.jpg'),
            require('../img/c1.jpg'),
            require('../img/c2.jpg'),
            require('../img/c3.jpg'),
            require('../img/c4.jpg'),
            require('../img/c6.jpg'),
            require('../img/c7.jpg'),
            require('../img/c8.jpg'),
            require('../img/c9.jpg'),
            require('../img/c10.jpg'),
            require('../img/c11.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Fan",
        description:"Мини-Вентилятор",
        price:100,
        available:true,
        images:[
            require('../img/Fan.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Books",
        description:"Книги программирования",
        price:0,
        available:true,
        images:[
            require('../img/Book1.jpg'),
            require('../img/Book.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Bucket",
        description:"Ведро",
        price:0,
        available:true,
        images:[
            require('../img/bucket1.jpg'),
            require('../img/bucket2.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Calculator",
        description:"Калькулятор",
        price:0,
        available:true,
        images:[
            require('../img/calculator.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "PS4",
        description:"Empty)",
        price:-1,
        available:false,
        images:[
            require('../img/PS4.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Salad bowl",
        description:"...",
        price:0,
        available:true,
        images:[
            require('../img/Salad bowl.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Thermos",
        description:"Fufu ya moto...",
        price:0,
        available:true,
        images:[
            require('../img/thermos.jpg'),
            require('../img/thermos1.jpg'),
            require('../img/thermos2.jpg'),
            require('../img/thermos3.jpg'),
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Unknown",
        description:"Неизвестный",
        price:0,
        available:true,
        images:[
            require('../img/Unknown.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Salad bowl",
        description:"...",
        price:0,
        available:true,
        images:[
            require('../img/Salad bowl.jpg')
        ],
        author:"https://t.me/bjack318"
    },

    {
        name: "Refrigerator",
        description:"Indesit brand. The power and other details I don't know.",
        price:6000,
        available:false,
        images:[
            require('../img/refrigerator1.jpg'),
            require('../img/refrigerator2.jpg'),
            require('../img/refrigerator3.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Mattress",
        description:"Подарок...",
        price:0,
        available:false,
        images:[
            require('../img/mattress.jpg'),
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Printer/Scanner",
        description:"HP brand. Подарок",
        price:0,
        available:false,
        images:[
            require('../img/imprimante1.jpg'),
            require('../img/imprimante2.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Table",
        description:"Подарок...",
        price:0,
        available:false,
        images:[
            require('../img/table.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Chair",
        description:"Компьютерное кресло",
        price:1500,
        available:false,
        images:[
            require('../img/chair.jpg')
        ],
        author:"https://t.me/bjack318"
    },
    {
        name: "Microwaves",
        description:"Микроволновая печь",
        price:1500,
        available:false,
        images:[
            require('../img/microwaves.jpg')
        ],
        author:"https://t.me/bjack318"
    }
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
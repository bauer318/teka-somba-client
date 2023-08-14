import React, {useEffect, useState} from 'react';
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import BuyerModal from "./buyerModal";
import axios from "axios";
import {Form} from "react-bootstrap";
import {getItem, isExistBuyer, setItem} from "../util/util";
import {useDispatch, useSelector} from "react-redux";
import {isProductContainsBuyer} from "../reducer/productBuyerReducers";


const baseUrl = 'http://localhost:8081/api/product';
let canDelete = false;
let i = 0;
const ProductCard = ({product, image, buyer}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(isProductContainsBuyer(product?.productId, buyer?.buyerId));
    },[]);

    const isContain = useSelector(state=>state.productBuyer);
    //console.log('Product ', product, ' buyer ', buyer, ' is ', isContain);



    //const [prodBuyer, setProdBuyer] = useState(null);
    //localStorage.removeItem('prodBuyer');
    /*useEffect(() => {
        if (isExistBuyer('prodBuyer')) {
            console.log('exist ');
            const prodBuy = getItem('prodBuyer');
            setProdBuyer(prodBuy);
        } else {
            console.log('not exist ');
            const prodBuy = [{
                productId: product?.productId,
                buyerId: buyer?.buyerId
            }];
            addBuyer(product?.productId, buyer).then(r => console.log(r));
            setItem('prodBuyer', prodBuy);
        }
    }, []);*/

    /*const isChecked = () => {
        let result = false;
        if (prodBuyer) {
            console.log(prodBuyer);
            prodBuyer.map(prodBuy => {
                if (prodBuy.productId === product?.productId && prodBuy.buyerId === buyer?.buyerId) {
                    result = true;
                }
            })
        }
        //console.log('result ', result, ' with ', product?.productId , ' and ', buyer?.buyerId)
        return result;
    }*/
    //const [isOn, setIsOn] = useState(isChecked());
    const [show, setShow] = useState(false);

    /*useEffect(() => {
        if (isExistBuyer('prodBuyer')) {
            const prodBuy = getItem('prodBuyer');
            //console.log(prodBuy);
            const prodBuyNew = [{
                productId: product?.productId,
                buyerId: buyer?.buyerId
            }];
            if (isOn) {
               // console.log('is on');
                if (!isChecked() && buyer) {
                    addBuyer(product?.productId, buyer).then(r => console.log(r));
                    prodBuy.push(prodBuyNew);
                    setItem('prodBuyer', prodBuy);
                }
            } else {
                //console.log('is off');
                if (isChecked()) {
                    //console.log('is checked');
                    handleDelete();
                    const index = prodBuy.indexOf(prodBuyNew);
                    if (index > -1) {
                        prodBuy.splice(index, 1);
                    }
                }else{
                    //console.log('is not checked');
                }
            }
        }
    }, [isOn]);*/

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateProduct = async (id, product) => {
        try {
            const response = await axios.put(`${baseUrl}/edit/${id}`, product);
            return response.data;
        } catch (error) {
            console.log(error.response);
        }
    }

    const addBuyer = async (id, buyerParam) => {
        try {
            const response = await axios.post(`${baseUrl}/add-buyer/${id}`, buyerParam);
            return response;
        } catch (error) {
            console.log(error.response);
        }
    }

    const handleAdd = () => {
        handleShow();
        if (buyer) {
            addBuyer(product?.productId, buyer);
        }
    }

    const handleDelete = () => {
        const buyers = [...product.buyers];
        const newBuyers = buyers.filter(b => b.buyerId !== buyer.buyerId);
        const updatedProduct = {
            ...product,
            buyers: [...newBuyers]
        };
        updateProduct(product.productId, updatedProduct).then(
            response => console.log('updated ', response.buyers)
        );
    }

    const handleFormChange = () => {
        //setIsOn(!isOn);
        //canDelete = true;
    }
    return (

        <Col xs={12} md={6} lg={true} className={"mb-5 ms-4"}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{product?.name}</Card.Title>
                    <Card.Text className={"i"}>
                        {product?.price} Rub
                    </Card.Text>
                    <Card.Text>
                        {product?.description}
                    </Card.Text>
                    {/*<Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="I plan to buy it"
                            defaultChecked={containBuyer()}
                            onChange={()=>handleOnChange()}
                        />
                    </Form>*/}
                    <Form>
                        <Form.Check
                            type={'checkbox'}
                            id={'default-radio'}
                            label={'I plan to  buy it'}
                            onChange={() => handleFormChange()}
                            defaultChecked={isContain}
                        />
                    </Form>

                    {/*
                        containBuyer() ? (
                            <Button className={"btn bg-danger"} onClick={() => handleDelete()}>No
                                need</Button>) : (<Button onClick={() => handleAdd()}>I plan to buy it</Button>)
                    */}
                </Card.Body>
            </Card>
            <BuyerModal show={show} handleClose={() => handleClose()}/>
        </Col>

    );
};

export default ProductCard;
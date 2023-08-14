import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";
import {getItem, isExistBuyer, setItem} from "../util/util";

const baseUrl = 'http://localhost:8081/api/buyer';

const BuyerModal = (Props) => {
    const [buyer, setBuyer] = useState('');

    const handleNameChange = (event) => {
        const inBuyer = event.target.value;
        if (inBuyer !== '') {
            setBuyer(inBuyer);
        }
    }
    const handleSubmit = () => {
        if (buyer !== '') {
            const buyerRq = {
                name: buyer
            };
            const postedBuyer = postBuyer(buyerRq);
            postedBuyer.then(
                result => setItem('buyer', result)

            );

        }
        Props.handleClose();
    }

    const postBuyer = async buyer => {
        try {
            const response = await axios.post(baseUrl, buyer);
            return response.data;

        } catch (error) {
            if (error.response.status === 409) {
                alert(`The buyer ${buyer.name} already exists!!!`);
            }
        }

    }
    return (
        <div
            className="modal show"
            style={{display: 'block', position: 'initial'}}
        >
            <Modal show={Props.show && !isExistBuyer('buyer')}
                   onHide={Props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your First name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="firstName">First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        onChange={handleNameChange}
                        maxLength={25}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Enters ur first name, if that name already exist adds some letter/character.
                    </Form.Text>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={Props.handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>OK</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BuyerModal;
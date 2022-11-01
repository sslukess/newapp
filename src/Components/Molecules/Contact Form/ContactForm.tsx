import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';


export const ContactForm: FC = () => {

    return (
        <Form>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label> 
                <Form.Control as='input'/> 
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label> 
                <Form.Control type='email'/> 
            </Form.Group>
            <Form.Group>
                <Form.Label>Inquery</Form.Label> 
                <Form.Control as='textarea'/> 
            </Form.Group>
        </Form>
    )
};
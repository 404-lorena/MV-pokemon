import React from "react";

// CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

                        // props ill want to pass down
export const PokeCard = ({id, name, img}) => {
    return(
        <Card className="card col" style={{ width: '18rem' }} >
            <Card.Img 
                src={img}
                alt={name}
                style={{ width: '5rem' }}
                className="card-img-top"/>
            <Card.Body className="card-body">
                <Card.Title> Name: {name}</Card.Title>
                <Card.Text>Number: {id}</Card.Text>
                <Button variant="success">Add</Button>
            </Card.Body>
           
        </Card>
    )
}
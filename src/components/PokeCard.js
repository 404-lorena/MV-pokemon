import React from "react";

// CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

                        // props ill want to pass down
export const PokeCard = ({id, name, img}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img 
                variant="top" 
                src={img}
                alt={name}/>
            <Card.Body>
                <Card.Title> Name: {name}</Card.Title>
                <Card.Text>Number: {id}</Card.Text>
            </Card.Body>
           
        </Card>
    )
}
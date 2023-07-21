import React from "react";

// CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

                        // props ill want to pass down
export const PokeCard = ({id, name, image, ability}) => {


    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> Pokemon Name </Card.Title>
                <Card.Text>Ability:</Card.Text>
                <Card.Text>Level:</Card.Text>

            </Card.Body>
           
        </Card>
    )
}
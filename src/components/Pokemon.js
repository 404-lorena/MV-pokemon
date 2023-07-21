import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const Pokemon = () => {

        return (
            <div className="container">
                <h1>Gotta catch 'em all!</h1> 
                <div className="pokemon-container">
                    <div className="all-container">
                        <Button variant="primary">Load More</Button>
                    </div>

                </div>
            </div>
        )
    }


export default Pokemon;
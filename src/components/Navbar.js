import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function topBar(){
    return(
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Pokeverse | All Pokemon</Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default topBar;
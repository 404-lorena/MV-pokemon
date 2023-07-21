import React from "react";

// components
import { PokeCard } from "./PokeCard";

// CSS
import Stack from 'react-bootstrap/Stack';

// REACT EFFECTS
import { useEffect, useState } from "react";

const Pokemon = () => {

        // FETCH
        const [allPokemon, setAllPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=151')
        const getAllPokemon = async () => {
            const res = await fetch(allPokemon)
            const data = await res.json()

            console.log(data)
        }

        // SLAP ON DOM
        useEffect(() => {
            getAllPokemon()
        })

        return (
            <div className="container">
                <h1>Gotta catch 'em all!</h1> 
                <div className="container">
                    <Stack direction="horizontal" gap={2} className="all-pokemon">
                        <PokeCard />
                        <PokeCard />
                        <PokeCard />
                        <PokeCard />
                        <PokeCard />
                        <PokeCard />
                    </Stack>
                </div>
            </div>
        )
    }


export default Pokemon;
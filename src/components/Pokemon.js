import React from "react";

// components
import { PokeCard } from "./PokeCard";

// CSS
import Stack from 'react-bootstrap/Stack';

// REACT EFFECTS
import { useEffect, useState } from "react";

const Pokemon = () => {
 // State to store api response data
 const [allPokemon, setAllPokemon] = useState([])

useEffect(() => {
    const getPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')
        const listaPokemones = await response.json()
        const {results} = listaPokemones

        const pokemones = results.map( async (pokemon) =>  {
            const response = await fetch(pokemon.url)
            const poke = await response.json()

            console.log(poke)
        })
        setAllPokemon(results)
    }
    getPokemon()
},[])

        return (
            <div className="container">
                <h1>Gotta catch 'em all!</h1> 
                <div className="container">
                    <Stack direction="horizontal" gap={2} className="all-pokemon">
                        {allPokemon.map((pokemon) => 
                            <PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.other
                            }/>
                        )}
                    </Stack>
                </div>
            </div>
        )
    }


export default Pokemon;
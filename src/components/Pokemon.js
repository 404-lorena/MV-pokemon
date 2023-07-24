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
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const listaPokemones = await response.json()
        const {results} = listaPokemones

        const pokemones = results.map( async (pokemon) =>  {
            const response = await fetch(pokemon.url)
            const poke = await response.json()

            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other.dream_world.front_default
            }
        })
        setAllPokemon(await Promise.all(pokemones))
    }
    getPokemon()
}, [])

        return (
            <div className="container">
                <h1>Gotta catch 'em all!</h1> 
                <div className="container">
                    <Stack direction="horizontal" gap={2} className="row row-cols-1 row-cols-md-2 g-4">
                        {allPokemon.map((pokemon) => 
                            <PokeCard 
                                
                                key={pokemon.id} 
                                id={pokemon.id} 
                                name={pokemon.name} 
                                img={pokemon.img}
                            />
                        )}
                    </Stack>
                </div>
            </div>
        )
    }


export default Pokemon;
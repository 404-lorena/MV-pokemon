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

const getAllPokemon = async () => {
    //FETCH
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await res.json()
    console.log(data)

    data.results.forEach(async(pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        // arr.push(data)
    })
    setAllPokemon(data)
}
    
    //SLAP ON DOM
    useEffect(() => {
        getAllPokemon()
    },[])

        return (
            <div className="container">
                <h1>Gotta catch 'em all!</h1> 
                <div className="container">
                    <Stack direction="horizontal" gap={2} className="all-pokemon">
                        {allPokemon.map((pokemon) => 
                            <PokeCard key={pokemon.id} id={pokemon.id}/>
                        )}
                    </Stack>
                </div>
            </div>
        )
    }


export default Pokemon;
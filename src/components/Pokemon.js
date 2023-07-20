import { useState }  from 'react';
import {UseFetch} from './UseFetch.js'


const Pokemon = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemonState = UseFetch(url)
    const {loading,data}=pokemonState

    loading ? console.log("Loading") : console.log(data.results)

        return (
            <div>
                <h1>Gotta catch 'em all</h1>     
            </div>
        )
    }


export default Pokemon;
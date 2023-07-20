import React from "react";
import UseFetch from "./UseFetch";

export const PokeCard = ({url}) => {

    const pokemonState = UseFetch(url)
    const {loading,data}=pokemonState

    return(
        <div>
            {loading ? <h1>Loading</h1> : <div className="cards"></div>}

        </div>
    )
}
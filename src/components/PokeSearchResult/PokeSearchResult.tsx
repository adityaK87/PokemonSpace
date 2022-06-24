import React from "react";
import "./PokeSearchResult.css"
const PokeSearchResult = () => {
    const selectedPokemon = false;

    return  (
        <div className="poke-result-card">
            {
                selectedPokemon 
                ?
                (
                    <div> 
                        {/* Add the image here */}
                        <p>Name: Pikachu</p>
                        <p>Id: some id</p>
                        <p>Height: some Height</p>
                        <p>weight: some weight</p>
                        <p>Base Exp : 100</p>
                    </div>
                ): (
                    <h2>Welcome to the Pokedex  </h2>
                )
            }
        </div>
    )
}

export default PokeSearchResult;
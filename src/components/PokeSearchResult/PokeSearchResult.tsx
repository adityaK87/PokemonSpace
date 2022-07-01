import React from "react";
import { PokemonSchema } from "../../Types/PokemonSchema";
import Footer from "../Footer/Footer";
import "./PokeSearchResult.css"


interface pokeSearchResultprops{
  selectedPokemon:PokemonSchema | undefined;
}

const PokeSearchResult = ({selectedPokemon}:pokeSearchResultprops) => {
    const {name ,id ,height,weight,base_experience,sprites} = selectedPokemon || {}
    return  (
        <div className="poke-container">       
         <div className="poke-result-card">
            {
                selectedPokemon 
                ?
                (
                    <div> 
                        {/* Add the image here */}
                        <img src={sprites?.animated || sprites?.normal} 
                        alt="pokemon" 
                        className="pokeSearchResult-img" />
                        <p>Name:{name}</p>
                        <p>Id:{id}</p>
                        <p>Height:{height}</p>
                        <p>Weight:{weight}</p>
                        <p>Base Exp:{base_experience}</p>
                    </div>
                ): (
                    <h2>Welcome to the Pokedex  </h2>
                )
            }
        </div>
        <div className="footer">
            <Footer />
        </div>
        </div>

    )
}

export default PokeSearchResult;

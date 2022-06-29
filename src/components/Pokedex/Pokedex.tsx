import React from "react";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import PokeList from "../PokeList/PokeList";
import SearchBox from "../SearchBox/SearchBox";
import "./Pokedex.css"
import { PokemonSchema } from "../../Types/PokemonSchema";
 

interface pokedexProps{
    searchedPokemons:PokemonSchema[]; 
    selectedPokemon:PokemonSchema|undefined;
    onInputChange:(inputValue:string)=>void;
    onPokemonClick:(pokemonName:string)=>void;
}
const Pokedex = ({searchedPokemons ,selectedPokemon,onInputChange,onPokemonClick }:pokedexProps) => {
      return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox   onInputChange={onInputChange}/>
                <PokeList
                onPokemonClick={onPokemonClick}
                searchedPokemons={searchedPokemons} />
            </div>

            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon}/>
            </div>
        </div>
        )
}

export default Pokedex;

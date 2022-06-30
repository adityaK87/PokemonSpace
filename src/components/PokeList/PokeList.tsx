import React from "react";
import { PokemonSchema } from "../../Types/PokemonSchema";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css"

interface pokelistprops{
    searchedPokemons:PokemonSchema[];
    onPokemonClick:(pokemonName:string)=>void;
 }

const  PokeList = ({searchedPokemons,onPokemonClick}:pokelistprops) => {
  return(
    <div
    className="pokelist">
        {
            searchedPokemons.map((pokemon) => {
                // This map function is use to iterate every elements of an array
                // console.log(pokemon)
                return (
                    pokemon.name! &&(
                        <PokeCard 
                         name={pokemon.name} 
                         key={pokemon.id} 
                         spriteUrl={pokemon.sprites?.normal}
                         onPokemonClick={onPokemonClick}
                         />
                    )
                )
            })
        }
    </div>
)}

export default PokeList;

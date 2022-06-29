import React from "react";
import "./PokeCard.css";

interface PokeCardProps{
    spriteUrl?:string;
    name:string;
    onPokemonClick:(pokemonName:string)=>void;
}
const PokeCard = ({spriteUrl , name ,onPokemonClick }:PokeCardProps) => {
 return (
    <div 
   onClick={() => onPokemonClick(name)}
    className="pokecard">
        {/* Image */}
        <img src={spriteUrl} alt="pokemon"  className="pokemon-spriteUrl"/>
        <p>{name}</p>
    </div>
 )


}
export default PokeCard;

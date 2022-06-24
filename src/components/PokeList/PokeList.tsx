import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css"

const PokeList = () => {
return(
    <div
    className="pokelist">
        <PokeCard name="Pikachu"/>
        <PokeCard name="balbasur"/>
        <PokeCard name="ivysaur"/>
        <PokeCard name="Pikachu"/>
        <PokeCard name="Pikachu"/>
    
    </div>
)
}
export default PokeList;
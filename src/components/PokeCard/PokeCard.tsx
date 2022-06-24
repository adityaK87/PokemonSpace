import React from "react";
import "./PokeCard.css"

const PokeCard = (props:any) => {
 return (
    <div className="pokecard">
        {/* Image */}
        <p>{props.name}</p>
    </div>
 )


}
export default PokeCard;
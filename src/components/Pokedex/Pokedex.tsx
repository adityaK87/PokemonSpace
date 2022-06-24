import React from "react";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import PokeList from "../PokeList/PokeList";
import SearchBox from "../SearchBox/SearchBox";
import "./Pokedex.css"

const Pokedex = () => {
     return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
                <PokeList />
            </div>

            <div className="pokesearchresult-container">
                <PokeSearchResult  />
            </div>
        </div>
        )
}

export default Pokedex;
import React from "react";
import { pokemonData } from "../data/pokemonData";
import { PokemonSpritesSchema, PokemonSchema,  UnPatchedPokemonSchema } from "../Types/PokemonSchema";
import './App.css'
import Pokedex from "./Pokedex/Pokedex";


interface AppState{
    searchField:string;
    allPokemons:PokemonSchema[] ;
    searchedPokemons:PokemonSchema[];
    selectedPokemon:PokemonSchema| undefined;
}
 class App  extends  React.Component<any, AppState>  {
        state = {
            searchField:"",
            allPokemons:[],
            searchedPokemons:[],
            selectedPokemon:undefined,
        };   


    patchPokemonData = (pokemons:UnPatchedPokemonSchema[])=>{
        const patchedPokemons = pokemons.map((pokemon)=> {
             let parsedSprites:PokemonSpritesSchema={
                normal:undefined,
                animated:undefined
             };
             try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites)
                
             } catch (e) {
                console.log("Exception while parsing the sprites: ", e)
             }

             const patchedPokemons:PokemonSchema = {
                ...pokemon,
                sprites:parsedSprites
             };
             return patchedPokemons;
        });
        return patchedPokemons;
    }

    componentDidMount(){
        // patch  the stringified pokemon sprites 
        const patchedPokemons:PokemonSchema[]=this.patchPokemonData(pokemonData)
        // console.log(patchedPokemons)

        
        // update the state with the patched pokemons
        this.setState({
            allPokemons : patchedPokemons,
            searchedPokemons :  patchedPokemons
        });
   }
    
render() {
    return (
         <div className="app">
            <h1> Pokedex! </h1>
            <Pokedex />
         </div>
    );
}
    
 }

 export default App;

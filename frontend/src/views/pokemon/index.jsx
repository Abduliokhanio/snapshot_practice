import { useEffect, useState } from "react";
import PokemonList from "./pokemon_list";

function PokemonIndex() {
    const [pokemonList, setpokemonList] = useState([]);
    let pull_in_index = () => {
        fetch('http://localhost:3000/api/pokemons')
        .then(res => res.json())
        .then(data => {
            setpokemonList(data)
        })
    }
    
    useEffect(()=> {
        pull_in_index()
    }, [])

    return (
        <>
            <h1>Pokemon Index</h1>
            <PokemonList data={pokemonList} />
        </>
        
    )
}
export default PokemonIndex;
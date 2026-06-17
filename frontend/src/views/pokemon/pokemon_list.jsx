import { Component } from "react";
import { Link } from "react-router-dom";

class PokemonList extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <>
                <ol>
                    {this.props.data.map((pokemon)=>{
                        return (
                            <div>
                                <li key={pokemon.id}>{pokemon.name}</li>
                                <Link to={`/pokemons/${pokemon.id}`}>show</Link>
                                <br/>
                                <Link to={`/pokemons/${pokemon.id}/edit`}>edit</Link>
                                <br/>
                                <button>destroy</button>
                            </div>
                        )
                    })}
                </ol>
            </>
        )
  }
}

export default PokemonList;
import { Component } from "react";
import { Link } from "react-router-dom";
import CratePokemon from './create'

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: props.data
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                pokemons: this.props.data
            })
        }
    }

    addPokemon = (pokemon) => {
        this.setState((prevState) => ({
            pokemons: [...prevState.pokemons, pokemon]
        }))
    }

    render() {
        return (
            <>
                <CratePokemon addPokemon={this.addPokemon}/>
                <ol>
                    {this.state.pokemons.map((pokemon)=>{
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
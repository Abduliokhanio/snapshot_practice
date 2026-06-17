import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PokemonEdit extends Component {

    constructor(props){
        super(props)
        this.id = document.URL.split('/')[4]
        this.state = {
            pokemon: {}
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/pokemons/${this.id}`)
        .then((res) => {
            this.setState({
                pokemon: res.data
            })
        })
    }

    updatePokeState = (e) => {
        this.setState({
            pokemon: {
                ...this.state.pokemon,
                name: e.target.value
            }
        })
    }

    updatePoke = () => {
        axios.patch(
            `http://localhost:3000/api/pokemons/${this.id}`,
            {pokemon: this.state.pokemon}
        )
        .then((res) => {
            this.setState({
                pokemon: res.data
            })
        })
    }

    render(){
        return(
            <>
                <br/>
                <input type="text" placeholder={this.state.pokemon.name} onChange={(e) => {this.updatePokeState(e)}}/>
                <button onClick={() => this.updatePoke()}>Submit</button>
                <br/>
                <br/>
                <Link to={"/pokemons"}>Back to pokemons</Link>
            </>
        )
    }
}

export default PokemonEdit 
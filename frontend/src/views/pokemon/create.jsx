import axios from "axios";
import { Component } from "react";

class CratePokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemon: { 
                name: "new name" 
            }
        }
    }

    updatePokeState = (e) => {
        this.setState({
            pokemon: {
                name: e.target.value
            }
        })
    }

    createPoke = () => {
        axios.post('http://localhost:3000/api/pokemons',
            {pokemon: this.state.pokemon}
        )
        .then((res) => {
            this.props.addPokemon(res.data.pokemon)
        })
    }

    render(){
        return(
            <>
                <input type="text" placeholder={this.state.pokemon.name} onChange={(e) => {this.updatePokeState(e)}}/>
                <button onClick={() => this.createPoke()}>Submit</button>
            </>
        )
    }
}
export default CratePokemon;
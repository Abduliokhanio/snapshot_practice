import { Component } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

class PokemonShow extends Component{
    constructor(props){
        super(props)
        this.id = document.URL.split('/')[4]
        this.state = {
            pokemon: {}
        };
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/pokemons/${this.id}`)
        .then((response) => {
            this.setState({
                pokemon: response.data
            });
        })
    }

    render() {
        return (
            <>
                <p>Id: {this.state.pokemon?.id}</p>
                <p>Name: {this.state.pokemon?.name}</p>
                <Link to='/pokemons'>Back to pokemon list</Link>
            </>
        )
    }
}

export default PokemonShow
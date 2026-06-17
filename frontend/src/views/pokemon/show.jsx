import { Component } from "react"


class PokemonShow extends Component{
    constructor(props){
        super(props)
        this.id = document.URL.split('/')[4]
    }

    componentDidMount(){
        console.log("componentmounted")
    }

    render() {
        return (
            <>hello {this.id}</>
        )
    }
}

export default PokemonShow
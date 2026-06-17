import { Component } from "react";

class PokemonCounter extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    inc = () => {
        let count = this.state.counter + 1
        this.setState({
            counter: count
        })
    }

    dec = () => {
        let count = this.state.counter - 1
        this.setState({
            counter: count
        })
    }

    even_or_odd = () => {
        if (this.state.counter == 0){
            return(<>ZERO</>)
        }
        if (this.state.counter % 2 == 0){
            return(<>EVEN</>)
        }else{
            return(<>ODD</>)
        }
    }

    render(){
        return(
            <>
                <div>
                    <p>{this.even_or_odd()}</p>
                    <p>counter: {this.state.counter}</p> 
                </div>
                <div>
                    <button onClick={() => this.inc()}>Inc</button>
                    <button onClick={() => this.dec()}>Dec</button>
                </div>
                <br/>
                <br/>
                <br/>
            </>
        )
    }
}

export default PokemonCounter
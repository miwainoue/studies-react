import React, { Component } from 'react'

export default class Contador extends Component{
    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
    }

    alterarNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca})
    }

    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>INC</button>
                <button onClick={this.menosUm}>DEC</button>
                <button onClick={() => this.alterarNumero(10)}>INC 10</button>
                <button onClick={() => this.alterarNumero(-10)}>DEC 10</button>
            </div>
        )
    }
}

// Solução 01 - Bind
// constructor(props){
//     super(props);
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 02 - Função Arrow - onClick
{/* <button onClick={() => this.maisUm()}>INC</button> */}

// Solução 03 -  Função Arrow
// maisUm = () => {
//     console.log(this);
// }
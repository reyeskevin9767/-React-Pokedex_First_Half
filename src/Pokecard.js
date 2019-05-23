import React, { Component } from 'react';
import './Pokecard.css';
import pokeDex from './Pokedex';

class Pokecard extends Component{    
    static defaultProps = {
        id: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[0].id}.png`,
        name: "Butterfree",
        type: "flying",
        base_experience: 178,

}
    render(){
        return(
            <div className = "Pokecard-card">
                <p className = "Pokecard-name">{this.props.name}</p>
                <img className = "Pokecard-img" src = {this.props.img}></img>
                <p className = "Pokecard-type">Type: {this.props.type}</p>
                <p className = "Pokecard-exp">Exp: {this.props.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;
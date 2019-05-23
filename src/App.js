import React, { Component } from 'react';
import './App.css';
import Pokecard from './Pokecard';
import pokeDex from './Pokedex';


class App extends Component {
    render() {
        return (
            <div>
            <h3 className = "App-Title">Pokedex</h3>
                <div className ="App-Line">
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[0].id}.png`}
                    name = {pokeDex[0].name}
                    type = {pokeDex[0].type}
                    base_experience = {pokeDex[0].base_experience}
                />
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[1].id}.png`}
                    name = {pokeDex[1].name}
                    type = {pokeDex[1].type}
                    base_experience = {pokeDex[1].base_experience}
                />
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[2].id}.png`}
                    name = {pokeDex[2].name}
                    type = {pokeDex[2].type}
                    base_experience = {pokeDex[2].base_experience}
                />
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[3].id}.png`}
                    name = {pokeDex[3].name}
                    type = {pokeDex[3].type}
                    base_experience = {pokeDex[3].base_experience}
                />
                </div>
                <div className ="App-Line">
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[4].id}.png`}
                    name = {pokeDex[4].name}
                    type = {pokeDex[4].type}
                    base_experience = {pokeDex[4].base_experience}
                />
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[5].id}.png`}
                    name = {pokeDex[5].name}
                    type = {pokeDex[5].type}
                    base_experience = {pokeDex[5].base_experience}
                />
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[6].id}.png`}
                    name = {pokeDex[6].name}
                    type = {pokeDex[6].type}
                    base_experience = {pokeDex[6].base_experience}
                />
                <Pokecard 
                    img = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex[7].id}.png`}
                    name = {pokeDex[7].name}
                    type = {pokeDex[7].type}
                    base_experience = {pokeDex[7].base_experience}
                />
                </div>
            </div>
        );
    }
}



export default App;
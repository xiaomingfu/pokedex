import React, {Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component{
    render(){
        let {id, name, type, base_experience} = this.props;
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <img src={imgSrc} alt={name} />
                <div className="Pokecard-data">Type: {type}</div>
                <div>EXP: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;
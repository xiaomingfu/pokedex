import React, {Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component{
    render(){
        let {id, name, type, base_experience} = this.props;
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <div className="Pokecard">
                <h4>{name}</h4>
                <img src={imgSrc} alt={name} />
                <div>Type: {type}</div>
                <div>EXP: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;
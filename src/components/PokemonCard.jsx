import React from 'react'
import '../stylesheets/PokemonCard.css'

const PokemonCard = (props) => {

    const { pokemon } = props

    return (
        <div className="card-container">
            <img className="card-img" src={pokemon.avatar} alt={pokemon.pokemonName} />
            <h3 className="card-name">{pokemon.pokemonName}</h3>
            <ul className="card-list">
                {pokemon.power && Object.values(pokemon.power).map(power => (
                    <li className='card-power'>{power}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default PokemonCard
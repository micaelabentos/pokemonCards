import React from 'react'
import PokemonCard from './components/PokemonCard'
import { Pokemon } from './pokemons'
import './stylesheets/App.css'

function App() {

  const pokeType = Object.keys(Pokemon)

  return (
    <div className="App">
        <h1 className="main-text">Tengo que atraparlos!</h1>
        <div className="main-container">
          {pokeType.map(type => (
            Pokemon[type].map(pokemon => (
              <PokemonCard key={pokemon.pokemonName} pokemon={pokemon} />
            ))
          ))
          }
          </div>
    </div>
  )
}

export default App

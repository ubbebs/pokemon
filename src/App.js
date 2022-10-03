import React, { useState, useEffect } from "react";
import Pokemon from '../src/components/pokemonBlock/pokemon.js'
import Description from '../src/components/pokemonDesc/description'

import './css/App.css'

function App() {
  const [pokemons, setPokemons] = useState()
  const [urlpokemon, setUrlPokemon] = useState()
  const [descriptionResolved, setDescriptionResolved] = useState(false)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
        .then((response) => response.json())
        .then((data) => setPokemons(data))
  }, []);

  const showPokemon = (selected) => {
    setUrlPokemon(selected)
  }

  const isDescription = () => {
    setDescriptionResolved(true)
  }

  return (
    <div className="App">
      <div className="main-desc">
        <Description data={urlpokemon} func={isDescription} />
      </div>
      <div className="main-list">
        {pokemons && <Pokemon data={pokemons} func={showPokemon} />}
      </div>
    </div>
  )
}

export default App;

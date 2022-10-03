import React from 'react'
import './pokemon.css'

export default function Pokemon(props) {
  const pokemons = props.data.results.map((elem, index) => {
    return (
      <div className='pokemon-main' onClick={() => {
        props.func(elem.url)
        }}>
        <p key={index}>#{(index + 1).toString().padStart(3,'0')} | {elem.name}</p>
      </div>
    )
  })

  return (
    pokemons
  )
}

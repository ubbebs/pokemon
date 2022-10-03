import React, { useState, useEffect } from "react";

import { GiHearts } from 'react-icons/gi';
import { GiBroadsword } from 'react-icons/gi';
import { RiShieldFill } from 'react-icons/ri';
import { GiStripedSword } from 'react-icons/gi';
import { RiShieldFlashFill } from 'react-icons/ri';
import { GiWalkingBoot } from 'react-icons/gi'

import { pokemonBackground } from '../../utils/pokemonBackground.js'
import { typesBackground } from '../../utils/typesBackround.js'

import Info from '../info/info.js'
import Moves from '../moves/moves.js'

import './description.css'

export default function Description(props) {
    const [pokemon, setPokemon] = useState()
    // const [isInfo, setIsInfo] = useState(false)
    // const [isMoves, setIsMoves] = useState(false)

    useEffect(() => {
        // setIsInfo(false)
        // setIsMoves(false)
        fetch(`${props.data}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
    }, [props.data]);

    if (!pokemon) {
        document.body.classList.add('bg')
        return (null)
    } else {
        document.body.classList.remove('bg')
    }

    // isInfo && isMoves ? console.log(true) : console.log(false)

    // const setInfo = () => {
    //     setIsInfo(true)
    // }

    // const setMoves = () => {
    //     setIsMoves(true)
    // }

    document.body.style.backgroundColor = pokemonBackground[pokemon.types[0].type.name]

    const pokemonDesc = (
        <div className="description-main">
            <div className="description-main-top">
                <span>#{(pokemon.id).toString().padStart(3,'0')}</span>
                <p>{pokemon.name}</p>
                <div className="description-main-top-types">
                    {pokemon.types.map((elem, index) => {
                        return <p key={index} style={{backgroundColor: typesBackground[elem.type.name]}}>{elem.type.name}</p>
                    })}
                </div>
                <div className="description-main-top-img">
                    <img src={`${pokemon.sprites.front_default}`} alt='Pokemon' />
                </div>
            </div>
            <div className="description-main-bottom">
                <div className="description-main-bottom-info">
                    <Info data={pokemon.id} /*func={setInfo}*/ />
                </div>
                <div className="description-main-bottom-stats">
                    <div className="description-main-bottom-stat">
                        <GiHearts style={{color: 'red'}}/>
                        <span><i>HP:</i> {pokemon.stats[0].base_stat}</span>
                    </div>
                    <div className="description-main-bottom-stat">
                        <GiBroadsword />
                        <span><i>Attack:</i> {pokemon.stats[1].base_stat}</span>
                    </div>
                    <div className="description-main-bottom-stat">
                        <RiShieldFill style={{color: 'blue'}}/>
                        <span><i>Defense:</i> {pokemon.stats[2].base_stat}</span>
                    </div>
                    <div className="description-main-bottom-stat">
                        <GiStripedSword />
                        <span><i>Special attack:</i> {pokemon.stats[3].base_stat}</span>
                    </div>
                    <div className="description-main-bottom-stat">
                        <RiShieldFlashFill style={{color: 'green'}} />
                        <span><i>Special defense:</i> {pokemon.stats[4].base_stat}</span>
                    </div>
                    <div className="description-main-bottom-stat">
                        <GiWalkingBoot style={{color: 'brown'}} />
                        <span><i>Speed:</i> {pokemon.stats[5].base_stat}</span>
                    </div>
                </div>
                <Moves data={pokemon.moves} /*func={setMoves}*/ />
            </div>
        </div>
    )

    return (
        pokemonDesc
    )
}

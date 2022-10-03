import React, { useState, useEffect } from "react";

import { typesBackground } from '../../utils/typesBackround.js'

import './moves.css'

export default function Moves(props) {
    const [moves, setMoves] = useState([])

    useEffect(() => {
        Promise.all(
            props.data.map(elem => 
                fetch(elem.move.url)
            )
        )
        .then(responses => 
            Promise.all(
                responses.map(
                    response => response.json()
                )
            )
        )
        .then(data => setMoves(data))
    }, [props.data]);

    if (!moves) return null

    //props.func()

    const movesList = moves.map((move, index) => {
        return (
            <div key={index} className="moves-box-elem">
                <span style={{backgroundColor: typesBackground[move.type.name]}}>{move.type.name}</span>
                <p>{move.name}</p>
                <p> (power: {move.power ? move.power : 0})</p>
            </div>
        )
    })

    return(
        <div className="moves-box">
            {movesList}
        </div>
        
    )
}

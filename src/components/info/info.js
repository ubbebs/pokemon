import React, { useState, useEffect } from "react";

export default function Info(props) {
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/characteristic/${props.data}/`)
            .then((response) => response.json())
            .then((data) => setInfo(data))
            .catch((e) => {
                setInfo('We dont know much about this pokemon... yet.')
            })
    }, [props.data]);

    if (!info) return null

    //props.func()

    let info_en

    typeof info === 'string' ? info_en = info : info_en = info.descriptions.filter(elem => elem.language.name === 'en')[0].description

    return (info_en)
}
import React from "react";
import './pokemon.scss';

function Pokemon({ imgSrc, name }) {
    return (
        <>
            <h2>Hello, {name}</h2>
            { 
                imgSrc.length > 0 && <img src={imgSrc} alt="img" />
            }
        </>
    )
}

export default Pokemon;

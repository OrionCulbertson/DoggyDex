import React, {useState} from 'react'
import axios from 'axios'
//https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei

const DogInfo = ({dog_id, dogObject}) => {
    return (
        <div>
            <h1>Dog:</h1>
            <h2>{dogObject.dog_id}</h2>
            <h2>{dogObject.dog_breed}</h2>
        </div>
    )
}

export default DogInfo;

import React, {useState} from 'react'
//https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei

const DogInfo = (props) => {
    const dog = props.location.state.dog
    console.log(dog)
    return (
        <div className="contentContainer">
            <h1>Dog:</h1>
            <h1>{dog.dogbreed}</h1>
            <img src={dog.img}></img>
            <p>{dog.description}</p>
            
        </div>
    )
}

export default DogInfo;

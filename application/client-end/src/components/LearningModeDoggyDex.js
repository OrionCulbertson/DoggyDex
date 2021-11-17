import React from 'react'
import {  useHistory } from 'react-router-dom'; 

const LearningModeDoggyDex = ({ dogData }) => {

    const history = useHistory();
    const handleClick = (dogs) => {
        history.push('/doginfo', {dog: dogs});
   }

    return (
        <div className ="contentContainer">
                 <h1>Inside LM</h1>
                 {dogData &&
                dogData.dogs &&
                dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}>{dogs.dogbreed}</button>)}
        </div>
    )
}

export default LearningModeDoggyDex

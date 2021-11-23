import React from 'react'
import {  useHistory } from 'react-router-dom'; 

const LearningModeDoggyDex = ({ dogData }) => {

    const history = useHistory();
    const handleClick = (dogs) => {
        history.push('/doginfo', {dogs: dogs});
   }

    return (
        <div className ="doggyDex-container">
                 {dogData &&
                dogData.dogs &&
                dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}><text className="doggyDex-text">{dogs.dogbreed}</text><img className="dogImg" src={dogs.img}></img></button>)}
        </div>
    )
}

export default LearningModeDoggyDex

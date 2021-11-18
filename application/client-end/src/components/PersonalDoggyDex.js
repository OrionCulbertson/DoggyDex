import React from 'react'
import {  useHistory } from 'react-router-dom'; 

const PersonalDoggyDex = ({ dogData }) => {
    const history = useHistory();
    const handleClick = (dogs) => {
        history.push('/doginfo', {dog: dogs});
   }
    const id = ['1000', '1010'];
    return (
        
             <div className ="contentContainer">
                 {dogData &&
                dogData.dogs &&
                dogData.dogs.map(
                    dogs => id.includes(dogs.breedid) ?
                    <button id='dogs'  key={dogs.breed} onClick={() => handleClick(dogs)}>{dogs.breed}</button>
                    : <button id='dogs' key={dogs.breed} onClick={() => handleClick(dogs)}>???</button>)}
            </div>
            
        
    )
}

export default PersonalDoggyDex




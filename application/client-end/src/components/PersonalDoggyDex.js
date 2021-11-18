import React from 'react'
import {  useHistory } from 'react-router-dom'; 
import image from '../resources/qm.png'
const PersonalDoggyDex = ({ dogData }) => {
    const history = useHistory();
    const handleClick = (dogs, dogFound) => {
        if(!dogFound) return;
        history.push('/doginfo', {dog: dogs});
   }

   
    const id = ['1000', '1010'];
    return (
        
             <div className ="contentContainer">
                 {dogData &&
                dogData.dogs &&
                dogData.dogs.map(
                    dogs => id.includes(dogs.breedid) ?
                    <button id='dogs'  key={dogs.breed} onClick={() => handleClick(dogs, true )}>{dogs.dogbreed}<img className="dogImg" src={dogs.img}></img></button>
                    : <button id='dogs-unknown' key={dogs.breed} onClick={() => handleClick(dogs, false)}>Unknown<img className="dogImg" src={image} ></img></button>)}
            </div>
            
        
    )
}

export default PersonalDoggyDex




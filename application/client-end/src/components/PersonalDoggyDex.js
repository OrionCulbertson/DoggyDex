import React from 'react'
import { useHistory } from 'react-router-dom'; 
import image from '../resources/qm.png'
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode'
import  Logo  from './Logo'

const PersonalDoggyDex = ({ dogData }) => {
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const history = useHistory();
    const handleClick = (dogs, dogFound) => {
        console.log("Inside pdd ", dogs);
        if (!dogFound) return;
        history.push('/doginfo', {dogs: dogs});
   }

   let token = '';
   let decodedToken = '';
   let dogIDs = [];
   if (isLoggedIn){
       token = user.token;
       decodedToken = jwt_decode(token);
       console.log(decodedToken.dogbreedIDs);
       dogIDs = decodedToken.dogbreedIDs;
       console.log("this is dogIDS: ", dogIDs);
    }

    return (
            <>
                <Logo/>
                <div className ="doggyDex-container">
                    {dogData &&
                        dogData.dogs &&
                        dogData.dogs.map(
                        dogs => dogIDs.includes(dogs.breedid) ?
                        <button id='dogs'  key={dogs.breed} onClick={() => handleClick(dogs, true )}><text className="doggyDex-text">{dogs.dogbreed}</text><img className="dogImg" src={dogs.img}></img></button>
                        : <button id='dogs-unknown' key={dogs.breed} onClick={() => handleClick(dogs, false)}><text className="doggyDex-text">Unknown</text><img className="dogImg" src={image} ></img></button>)}
                </div>
            </>
    )
}

export default PersonalDoggyDex

import React from 'react';
import { useHistory } from 'react-router-dom';

//https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei

const DogInfo = ( dogs ) => {
    const dog = dogs.location.state.dogs;
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return (
        <div>
            <div className="dogInfo-container">

                
                <img src={dog.img} className="dogInfo-image"></img>
                <h1 className="dogInfo-breed">{dog.dogbreed}</h1>
                <hr className="dogInfo-line"/>
                <p>{dog.description}</p>
            </div>
            <div className="contentContainer" id="dog-info-bttn-container">
                <button className="dog-info-bttn" onClick={() => handleClick()}>
                    GO BACK
                </button>
            </div>
            

            
        </div>
// import React, { useState } from 'react'
// import axios from 'axios'
// import { Button, DogFoundCard } from '.';
// import { FaArrowLeft } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// //https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei


// const DogInfo = ({dogUploaded, dogObject, setIsDogUploaded }) => {
//     const onClick = () => {
//         setIsDogUploaded(false);
//     }

//     return (
//         <>
//             {dogUploaded.dog_id ?
                
//                     <DogFoundCard dogUploaded={dogUploaded} dogObject={dogObject} onClick={onClick}/>
                
//                 :
//                 <>
//                     <p className="medText">We couldn't recognize any dogs in the picture!</p>
//                     <Link to="/" onClick={onClick}>
//                         <Button contents={<div><FaArrowLeft /> Try Again</div>} styleClass="stdButton" />
//                     </Link>
//                 </>
//             }
//         </>
    )
}

export default DogInfo;

import React, { useState } from 'react';
// //https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei
import { useHistory } from 'react-router-dom';
import Logo from './Logo'

const DogInfo = ( props ) => {
    const dog = props.location.state.dogs;
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return (
        <div>
            <Logo/>
            <div className="dogInfo-container">

                
                <img src={dog.img} className="dogInfo-image" alt=""></img>
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
  

  );
};

export default DogInfo;

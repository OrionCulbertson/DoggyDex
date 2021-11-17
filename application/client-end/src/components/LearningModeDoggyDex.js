import React from 'react'
import { useHistory } from 'react-router-dom';
import { Logo } from '.';

const LearningModeDoggyDex = ({ dogData }) => {

    const history = useHistory();
    const handleClick = (dogs) => {
        history.push('/doginfo', { dog: dogs });
    }

    return (
        <>
            <Logo />
            <div className="contentContainer">
                {dogData &&
                    dogData.dogs &&
                    dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}>{dogs.dogbreed}</button>)}
            </div>
        </>
    )
}

export default LearningModeDoggyDex

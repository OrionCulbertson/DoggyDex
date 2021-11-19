import React from 'react'
import { useHistory } from 'react-router-dom';
import { Logo } from '.';

const LearningModeDoggyDex = ({ dogData }) => {
    const history = useHistory();
    const handleClick = (dogs) => {
      console.log("inside lmdd", dogs)  
      history.push('/doginfo', { dog: dogs });
    }

    return (
        <>
            <Logo />
            <div className="contentContainer">
                {dogData &&
                    dogData.dogs &&
                    dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}>{dogs.dogbreed}</button>)}
{/* from prev branch
                dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}>{dogs.dogbreed}<img className="dogImg" src={dogs.img}></img></button>)} */}
            </div>
        </>
    )
}

export default LearningModeDoggyDex

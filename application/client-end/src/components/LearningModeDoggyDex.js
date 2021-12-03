import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './Logo'

const LearningModeDoggyDex = ({ dogData }) => {
  const history = useHistory();
  const handleClick = (dogs) => {
    history.push('/doginfo', {dogs: dogs});
  }

  return (
    <>
      <Logo/>
      <div className ="doggyDex-container">
                {dogData &&
              dogData.dogs &&
              dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}><text className="doggyDex-text">{dogs.dogbreed}</text><img className="dogImg" src={dogs.img}></img></button>)}
      </div>
    </>
  )
}

export default LearningModeDoggyDex

import React from 'react';
// //https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei
import { useHistory } from 'react-router-dom';
import Logo from './Logo';

const DogInfo = (props) => {
  console.log('inside of dogInfo', props);
  const dog = props.location.state.dogs;
  console.log('this is dog inside of dogInfo', dog);
  const history = useHistory();
  const handleClick = () => {
    history.push('/doggydex');
  };
  return (
    <div>
      <Logo />
      <div className="dogInfo-container">
        <img src={dog.img} className="dogInfo-image" alt=""></img>
        <h1 className="dogInfo-breed">{dog.dogbreed}</h1>
        <hr className="dogInfo-line" />
        <p>
          <pre className="dogInfo-description">{dog.description}</pre>
        </p>
      </div>
      <div className="contentContainer" id="dog-info-bttn-container">
        <button className="dog-info-bttn" onClick={() => handleClick()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DogInfo;

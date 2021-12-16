import React from 'react';
import { Link } from 'react-router-dom';
import { Button, DogNotSupported } from '.';
import { FaArrowRight } from 'react-icons/fa';

const DogFoundCard = ({ dogUploaded, dogObject, onClick }) => {
  // const dogBreed = dogObject.dogbreed;
  // const dogBreed = "German Shepherd";
  //For testing, in implementation it'll be: dogObject.img
  // const dogImage = "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg";
  console.log('inside of DogFoundCard', dogObject)
  return (
    <div>
      {dogObject.img && <img
        src={dogObject.img}
        alt={`${dogObject.dogBreed} Picture`}
        className="dogPreview"
      />}
      <p className="bigText">You found a dog!</p>
      <p className="medText">
        We can say with {dogUploaded.confidenceScore}% confidence it's a{' '}
        {dogUploaded.breedName}
      </p>
      {!dogObject.dogID && <DogNotSupported />}
      //<Link to="/doggydex" onClick={onClick}>
      <Link to={{pathname:'/doginfo', state:{ dogs: dogObject}}} onClick={onClick}>

        <Button
          contents={
            <div>
              Go to Dog Info <FaArrowRight />
            </div>
          }
          styleClass="stdButton"
        />
      </Link>
    </div>
  );
};

export default DogFoundCard;

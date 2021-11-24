import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import DogSubmission from './DogSubmission';
import DogInfo from './DogInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDogUploaded } from '../actions/dogUploaded';
import { DogFound, Logo } from '.';

const UploadDog = () => {
  const { isDogUploaded } = useSelector((state) => state.dogUploaded);
  const [dogUploaded, setDogUploaded] = useState({}); //Contains Dog ID, Confidence Score
  const [dogObject, setDogObject] = useState({}); //Contains Entire Dog Object
  const dispatch = useDispatch();

  const dispatchDogUploaded = (value) => {
    dispatch(setIsDogUploaded(value));
  };

  const getDogInfo = (dog_id) => {
    //TODO: DEFINE IT
    // axios.get(`/dog-info/${dog_id}`)
    //     .then( (response) => {
    //         console.log(response.data);
    //         setDogObject(response.data);
    //         // console.log(response)
    //         // console.log(dogObject)
    //         // console.log("In DI", dogObject.dog_id, dogObject.dog_breed);
    //     })
    //     .catch(error => console.log(`Error: ${error}`))
    setDogObject({
      dogID: dog_id,
      dogBreed: 'German Shepherd',
      img: 'https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg',
    });
  };

  return (
    <>
      {isDogUploaded ? (
        <DogFound
          dogUploaded={dogUploaded}
          dogObject={dogObject}
          setIsDogUploaded={dispatchDogUploaded}
        />
      ) : (
        <DogSubmission
          setDogUploaded={setDogUploaded}
          setIsDogUploaded={dispatchDogUploaded}
          getDogInfo={getDogInfo}
        />
      )}
    </>
  );
};

export default UploadDog;

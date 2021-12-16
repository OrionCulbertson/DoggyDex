import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import DogSubmission from './DogSubmission';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDogUploaded } from '../actions/dogUploaded';
import { DogFound } from '.';
import jwt_decode from 'jwt-decode';

const UploadDog = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { isDogUploaded } = useSelector((state) => state.dogUploaded);
  const [dogUploaded, setDogUploaded] = useState({}); //Contains Dog ID, Confidence Score
  const [dogObject, setDogObject] = useState({}); //Contains Entire Dog Object
  const dispatch = useDispatch();

  const dispatchDogUploaded = (value) => {
    dispatch(setIsDogUploaded(value));
  };

  // useEffect(() => {
  //   console.log('triggered', dogUploaded);
  //   let mounted = true;
  //   if (dogUploaded.breedName != null) {
  //     if (mounted) {
  //       // dispatch(setIsDogUploaded(true));
  //     }
  //   } else {
  //     // if (mounted) {
  //     //   console.log("NOT UPLOADED");
  //       // dispatch(setIsDogUploaded(false));
  //     // }
  //   }
  //   return () => {
  //     mounted = false;
  //   };
  // }, [dogUploaded]);

  const addToUserDoggyDex = async (dogID) => {
    // axios.post()
    try {
      const decodedToken = jwt_decode(user.token);
      const userID = decodedToken.userId;

      await axios
        .put(`/api/basicuser/add/${userID}/${dogID}`)
        .then((res) => {
          console.log(res.msg);

        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const getDogInfo = async (breedName) => {
    await axios
      .get(`/api/dogbreed/${breedName}`)
      .then((res) => {
        console.log('Upload Dog', res);
        setDogObject({
          dogID: res.data[0].breedid,
          dogBreed: res.data[0].dogbreed,
          img: res.data[0].img,
          description: res.data[0].description,
        });
        console.log(res.data[0].breedid);

        //Log in User's DoggyDex
        if (isLoggedIn) {
          addToUserDoggyDex(res.data[0].breedid);
        }
      })
      .catch((error) => {
        //Means that the dog isn't in our database.

        console.log(`Error: ${error}`);
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

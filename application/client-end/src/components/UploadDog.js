import React, { useState } from 'react';
import axios from 'axios';
import DogSubmission from './DogSubmission';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDogUploaded } from '../actions/dogUploaded';
import { DogFound } from '.';

const UploadDog = () => {
    const { isDogUploaded } = useSelector(state => state.dogUploaded);
    const [dogUploaded, setDogUploaded] = useState({}); // Contains Dog ID, Confidence Score
    const [dogObject, setDogObject] = useState({}); // Contains Entire Dog Object
    const dispatch = useDispatch();

    const dispatchDogUploaded = (value) => {
        dispatch(setIsDogUploaded(value));
    }

    const getDogInfo = (breedName) => {
        axios.get(`/api/dogbreed/${breedName}`)
        .then( (res) => {
            console.log(res);

            setDogObject({
              dogID: res.data[0]._id,
              dogBreed: res.data[0].dogbreed,
              img: res.data[0].img,
            });
        })
        .catch(error => console.log(`Error: ${error}`))
        
        
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
        // setDogObject({
        //     dogID: dog_id,
        //     dogBreed: "German Shepherd",
        //     img: "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg"
        // })
    }

    return (
        <>
            {isDogUploaded ?
                <DogFound dogUploaded={dogUploaded} dogObject={dogObject} setIsDogUploaded={dispatchDogUploaded} />
                :
                <DogSubmission setDogUploaded={setDogUploaded} setIsDogUploaded={dispatchDogUploaded} getDogInfo={getDogInfo} />
            }
        </>
    )
}

export default UploadDog;

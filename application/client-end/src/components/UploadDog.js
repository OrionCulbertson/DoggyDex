import React, { useState, useEffect } from 'react'
import axios from "axios"
import Button from './Button';
import DogSubmission from './DogSubmission';
import DogInfo from './DogInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDogUploaded } from '../actions/dogUploaded';

const UploadDog = () => {
    const { isDogUploaded } = useSelector(state => state.dogUploaded); //NOT WORKING, WHYYYYYYYYY
    const [dogUploaded, setDogUploaded] = useState({}); //Contains Dog ID, Confidence Score
    const [dogObject, setDogObject] = useState({}); //Contains Entire Dog Object
    const dispatch = useDispatch();

    const dispatchDogUploaded = (value) => {
        dispatch(setIsDogUploaded(value));
    }
    
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
    }

    return (
        <>
            {isDogUploaded ?
                <DogInfo dogUploaded={dogUploaded} dogObject={dogObject} setIsDogUploaded={dispatchDogUploaded} />
                :
                <DogSubmission setDogUploaded={setDogUploaded} setIsDogUploaded={dispatchDogUploaded} getDogInfo={getDogInfo} />
            }
        </>
    )
}

export default UploadDog;

import React, { useState, useEffect } from 'react'
import axios from "axios"
import Message from './Message';
import Button from './Button';
import DogSubmission from './DogSubmission';
import DogInfo from './DogInfo';

const UploadDog = () => {
    const [isDogUploaded, setIsDogUploaded] = useState(false);
    const [dogUploaded, setDogUploaded] = useState({});
    const [dogObject, setDogObject] = useState({});

    const getDogInfo = (dog_id) => {
        axios.get(`/dog-info/${dog_id}`)
            .then( (response) => {
                console.log(response.data);
                setDogObject(response.data);
                // console.log(response)
                // console.log(dogObject)
                // console.log("In DI", dogObject.dog_id, dogObject.dog_breed);
            })
            .catch(error => console.log(`Error: ${error}`))
    }

    return (
        <>
            {isDogUploaded ?
                <DogInfo dogObject={dogObject} />
                :
                <DogSubmission setDogUploaded={setDogUploaded} setIsDogUploaded={setIsDogUploaded} getDogInfo={getDogInfo} />
            }
        </>
    )
}

export default UploadDog;

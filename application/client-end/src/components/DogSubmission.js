import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaPaw } from 'react-icons/fa';
import Button from './Button';
import axios from 'axios';
import { HiOutlineExclamation } from 'react-icons/hi';
import { DogResultLoading } from '.';
import { useDispatch } from 'react-redux';


const DogSubmission = ({ setDogUploaded, setIsDogUploaded, getDogInfo }) => {
  const [photo, setPhoto] = useState(null);
  const [imgFile, setImgFile] = useState('');
  const [isPhoto, setIsPhoto] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
    setIsPhoto(file.type.startsWith('image') && !file.type.endsWith('gif'));
  };

 
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', photo);
      console.log(photo);
      console.log('before');
      setIsLoading(true);
      await axios
        .post('http://localhost:8080/api/image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(async (res) => {
          
          const mlJSONResponse = res.data;
          // console.log(mlJSONResponse);
        
          const breedName = mlJSONResponse.breedName;
          const confidenceScore = mlJSONResponse.confidenceScore;


          // const breedName = 'Labrador Retriever';
          // const confidenceScore = 20;

          // await new Promise((resolve) => setTimeout(resolve, 5000));
          /* TODO
                        Get dog ID from returned dog breed
                        Get whole dog w/ getDogInfo
                        Log Breed ID in user's Doggydex
                        Refresh loaded doggydex -- still needs done
                    */

          setDogUploaded({ breedName, confidenceScore });
          // setDogUploaded({dog_id: 10, confidenceScore: 90}); // Testing information
          await getDogInfo(breedName); // Loads dog object based off dog breed response

          console.log('done');
        });

      setIsDogUploaded(true);
      console.log('after');
      // setIsLoading(false);
    } catch (error) {
      error.response('Err' + error);
    }
  };

  return (
    <>
      {!isLoading && (
        <>
          <h2 className="bigText">Upload A Dog Picture!</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="dogUpload" className="uploadDogButton">
              <i>{<FaPaw />}</i> Select Dog Photo... <i>{<FaPaw />}</i>
            </label>
            <input id="dogUpload" type="file" onChange={onChange} />
            {isPhoto && (
              <Button
                contents={
                  <div>
                    Submit <FaArrowUp />
                  </div>
                }
                styleClass="stdButton"
                type="submit"
              />
            )}
          </form>
        </>
      )}
      {photo &&
        !isPhoto && ( //Check if file uploaded is a photo
          <div className="uploadError">
            <HiOutlineExclamation /> File selected is not a photo.{' '}
            <HiOutlineExclamation />
          </div>
        )}
      {isLoading && <DogResultLoading />}
    </>
  );
};

export default DogSubmission;

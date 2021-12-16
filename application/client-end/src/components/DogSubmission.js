import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaPaw } from 'react-icons/fa';
import Button from './Button';
import axios from 'axios';
import { HiOutlineExclamation } from 'react-icons/hi';
import { DogResultLoading } from '.';
import { useDispatch } from 'react-redux';
// import { setIsDogUploaded } from '../actions/dogUploaded';


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
          
          // console.log(imgFile);
          const mlJSONResponse = res.data;
          console.log(mlJSONResponse);
          // mlJSONResponse.breedName;
          // mlJSONResponse.humanPresent;
          // mlJSONResponse.confidenceScore;
        
          const breedName = mlJSONResponse.breedName;
          const confidenceScore = mlJSONResponse.confidenceScore;
          // const breedName = mlJSONResponse.breedName;
          // const confidenceScore = mlJSONResponse.confidenceScore;
          // const breedName = 'Labrador Retriever';
          // const confidenceScore = 20;

          // await new Promise((resolve) => setTimeout(resolve, 5000));
          /* TODO
                        Get dog ID from returned dog breed
                        Get whole dog w/ getDogInfo
                        Log Breed ID in user's Doggydex
                        Refresh loaded doggydex
                    */
          // FOR TESTING
          // const {dog_id, confidenceScore } = res.data;
          // const {dog_id, confidenceScore }
          //const dog_id = 20;
          //const confidenceScore = 90;
          // console.log(dog_id);
          // setUploadedFile({ fileName, filePath, dog_id }); // May not need this
          // setMessage("File Uploaded");
          setDogUploaded({ breedName, confidenceScore });
          // setDogUploaded({dog_id: 10, confidenceScore: 90}); // Testing information
          await getDogInfo(breedName); // Loads dog object based off dog breed response
          // setIsDogUploaded(true); // Updates the page
          
          // setFile({}); // Reset File Upload info
          // setFileName(""); // Reset File Name info
          // setImgFile('http://localhost:8080/api/image/id/' + res.data._id);
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

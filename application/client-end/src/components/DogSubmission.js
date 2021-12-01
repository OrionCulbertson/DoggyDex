import React, { useState } from 'react';
import { FaArrowUp, FaPaw } from 'react-icons/fa';
import Button from './Button';
import axios from 'axios';
import { HiOutlineExclamation } from 'react-icons/hi';

const DogSubmission = ({ setDogUploaded, setIsDogUploaded, getDogInfo }) => {
  const [photo, setPhoto] = useState(null);
  const [imgFile, setImgFile] = useState('');
  const [isPhoto, setIsPhoto] = useState(false);

  const onChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setPhoto(file);
    // setIsPhoto(true);
    setIsPhoto(file.type.startsWith('image') && !file.type.endsWith('gif'));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', photo);
    // console.log(photo);
    axios
      .post('/api/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // setImgFile('http://localhost:8080/api/image/id/' + res.data._id);
        // console.log(imgFile);

        //Get dog ID from returned dog breed
        //Get whole dog w/ getDogInfo
        //Log Breed ID in user's Doggydex
        //Refresh loaded doggydex

        // FOR TESTING
        // const {dog_id, confidenceScore } = res.data;
        // const {dog_id, confidenceScore }
        const dog_id = 20;
        const confidenceScore = 90;
        // console.log(dog_id);
        // setUploadedFile({ fileName, filePath, dog_id }); //May not need this
        // setMessage("File Uploaded");
        setDogUploaded({ dog_id, confidenceScore });
        // setDogUploaded({dog_id: 10, confidenceScore: 90}); //Testing information
        getDogInfo(dog_id); //Loads dog object based off dog breed
        setIsDogUploaded(true); //Updates the page
        // setFile({}); //Reset File Upload info
        // setFileName(''); //Reset File Name info
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <p className="bigText">Upload A Dog Picture!</p>
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

        {photo &&
          !isPhoto && ( //Check if file uploaded is a photo
            <div className="uploadError">
              <HiOutlineExclamation /> File selected is not a photo.{' '}
              <HiOutlineExclamation />
            </div>
          )}
      </form>
    </>
  );
};

export default DogSubmission;

import React, { useState } from 'react'
import { FaArrowUp, FaPaw } from "react-icons/fa";
import Button from './Button';
import axios from 'axios';

const DogSubmission = ({ setDogUploaded, setIsDogUploaded, getDogInfo }) => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);
  const [imgFile, setImgFile] = useState('');

  const [testImage, setTestImage] = useState(null);
  const onChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };
  // const onChange = e => {
  //     //TO-DO: we need to filter out non-image files
  //     setFile(e.target.files[0]);
  //     setFileName(e.target.files[0].name);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', photo);
      console.log(photo);
      //axios.get('http://localhost:8080/api/image/upload');
      axios.post('/api/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
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
          setFile({}); //Reset File Upload info
          setFileName(""); //Reset File Name info
        })
    } catch (error) {
      error.response("Err" + error.response.data);
    }
  };
  // const onSubmit = async e => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     // console.log(file);
  //     try {
  //         console.log(formData)
  //         const res = await axios.post("/api/image/upload/", formData, {
  //             headers: {
  //                 'Content-Type': 'multipart/form-data'
  //             }
  //         });

  //         const { fileName, filePath, dog_id, confidenceScore} = res.data;
  //         setUploadedFile({ fileName, filePath, dog_id }); //May not need this
  //         setMessage("File Uploaded");
  //         setDogUploaded({dog_id, confidenceScore});
  //         // setDogUploaded({dog_id: 10, confidenceScore: 90}); //Testing information
  //         getDogInfo(dog_id); //Loads dog object based off dog breed
  //         setIsDogUploaded(true); //Updates the page
  //         setFile({}); //Reset File Upload info
  //         setFileName(""); //Reset File Name info
  //         //TODO: if user is logged in, store in user's profile

  //     } catch (err) {
  //         console.log("error")
  //         if (err.response.status === 500) {
  //             setMessage("Server error");
  //         } else {
  //             setMessage(err.response.data.msg);
  //         }
  //     }
  // };

  return (
    <>
      <p className="bigText">Upload A Dog Picture!</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="dogUpload" className="uploadDogButton">
          <i>{<FaPaw />}</i> Select Dog Photo... <i>{<FaPaw />}</i>
        </label>
        <input id="dogUpload" type="file" onChange={onChange} />
        <Button contents={<div>Submit <FaArrowUp /></div>} styleClass="stdButton" type="submit" />
        {imgFile && <img src={imgFile} style={{
          width: "90%",
        }} />}
      </form>
    </>
  )
}

export default DogSubmission;


/*

import React, { useState } from 'react';
import axios from 'axios';

const PhotoUpload = () => {
const [photo, setPhoto] = useState(null);
const [imgFile, setImgFile] = useState('');
const handleOnChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
};
  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
        const formData = new FormData();
        formData.append('image', photo);
         axios.post('http://localhost:8080/api/image/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
         }})
          .then(res => {
            setImgFile('http://localhost:8080/api/image/id/' + res.data._id)
          })
      } catch (error) {
        error.response("Err" + error.response.data);
      }
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <div>
          <label htmlFor="name">Choose photo to upload</label>
          <input type="file" name="image" onChange={handleOnChange} />
        </div>

        <button
          variant="primary"
          type="submit"
          className={`${!photo ? 'disabled submit-btn' : 'submit-btn'}`}
          disabled={photo ? false : true}
          > Upload
        </button>

      </form>
      <div>
      <img
      style={{ width: "25%", margin: "30px 0" }}
      src={imgFile} alt="img"/>
      </div>

    </div>
  );
};

export default PhotoUpload;

*/

import React, {useState} from 'react'
import { FaArrowUp, FaPaw } from "react-icons/fa";
import Button from './Button';
import axios from 'axios';


const DogSubmission = ({setDogUploaded, setIsDogUploaded, getDogInfo}) => {
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        //TO-DO: we need to filter out non-image files
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post("api/photo/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath, dog_id, confidenceScore} = res.data;
            setUploadedFile({ fileName, filePath, dog_id }); //May not need this
            setDogUploaded({dog_id, confidenceScore});
            // setDogUploaded({dog_id: 10, confidenceScore: 90}); //Testing information
            getDogInfo(dog_id); //Loads dog object based off dog breed
            setIsDogUploaded(true); //Updates the page

            //TODO: if user is logged in, store in user's profile
            
        } catch (err) {
            if (err.response.status === 500) {
                setMessage("Server error");
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };
    
    return (
        <>
            <p className="bigText">Upload A Dog Picture!</p>
            <form onSubmit={onSubmit}>
                <label htmlFor="dogUpload" className="uploadDogButton">
                    <i>{<FaPaw />}</i> Select Dog Photo... <i>{<FaPaw />}</i>
                </label>
                <input id="dogUpload" type="file" onChange={onChange} />
                <Button contents={<div>Submit <FaArrowUp /></div>} styleClass="stdButton" type="submit" />
            </form>
        </>
    )
}

export default DogSubmission;

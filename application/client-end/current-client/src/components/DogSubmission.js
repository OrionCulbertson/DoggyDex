import React, {useState} from 'react'
import { FaArrowUp, FaPaw } from "react-icons/fa";
import Button from './Button';
import axios from 'axios';


const DogSubmission = ({setDogUploaded, setIsDogUploaded, getDogInfo}) => {
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState("");

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
            const res = await axios.post("/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath, dog_id} = res.data;
            // console.log(res.data);
            setUploadedFile({ fileName, filePath, dog_id });
            setMessage("File Uploaded");
            setDogUploaded({dog_id});
            getDogInfo(dog_id);
            setIsDogUploaded(true);
            //if user is logged in, store in user's profile
            
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

export default DogSubmission

import React, { useState } from 'react'
import axios from 'axios'
import { Button, DogFoundCard } from '.';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei

const DogFound = ({dogUploaded, dogObject, setIsDogUploaded }) => {
    const onClick = () => {
        setIsDogUploaded(false);
    }

    return (
        <>
            {dogUploaded.dog_id ?
                
                    <DogFoundCard dogUploaded={dogUploaded} dogObject={dogObject} onClick={onClick}/>
                
                :
                <>
                    <p className="medText">We couldn't recognize any dogs in the picture!</p>
                    <Link to="/" onClick={onClick}>
                        <Button contents={<div><FaArrowLeft /> Try Again</div>} styleClass="stdButton" />
                    </Link>
                </>
            }
        </>
    )
}

export default DogFound;

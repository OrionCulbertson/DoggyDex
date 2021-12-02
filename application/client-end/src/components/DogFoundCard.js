import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '.';
import { FaArrowRight } from 'react-icons/fa';

const DogFoundCard = ({ dogUploaded, dogObject, onClick }) => {
    return (
        <div>
            <img src={dogObject.img} alt={`${dogObject.dogBreed} Picture`} className="dogPreview" />
            <p className="bigText">You found a dog!</p>
            <p className="medText">We can say with {dogUploaded.confidenceScore}% confidence it's a {dogObject.dogBreed}</p>
            <Link to="/doggydex" onClick={onClick}>
                <Button contents={<div>Go to DoggyDex <FaArrowRight/></div>} styleClass="stdButton" />
            </Link>
        </div>
    )
}

export default DogFoundCard;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const DogCard = (props) => {
    const  dogbreed  = props.dogbreed;

    return(
        <div className="card-container">
            <img src= {dogbreed.img} width="150" height="200" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-dogbreed/${dogbreed._id}`}>
                        { dogbreed.dogbreed} 
                    </Link>
                </h2>
                <p>ID: {dogbreed.breedid}</p>
            </div>
        </div>
    )
};
export default DogCard;
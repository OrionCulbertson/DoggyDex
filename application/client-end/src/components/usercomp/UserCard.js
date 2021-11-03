import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const UserCard = (props) => {
    const  user  = props.user;

    return(
        <div className="card-container">
            <img src= {user.img} width="150" height="200" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-user/${user._id}`}>
                        { user.name }
                    </Link>
                </h2>
                <p>Email: {user.email}</p>
            </div>
        </div>
    )
};

export default UserCard;


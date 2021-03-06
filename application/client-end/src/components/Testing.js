import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import userService from "../services/user.service";
import { setUserDoggydex } from "../actions/userDoggyDex";
import jwt_decode from 'jwt-decode'


const Testing = () => {
    const { user } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);
    const { isDogUploaded } = useSelector(state => state.dogUploaded);
    const [dogid, setDogid] = useState(-1);
    const dispatch = useDispatch();

    const check = () => {
        axios.get("/api/dogbreed/")
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }

    const getUserDogs = () => {
        userService.getUserDoggyDex().then(res => {
            console.log(res);
            dispatch(setUserDoggydex(res));
        });
    }

    let token = user.token;
    let decodedToken = jwt_decode(token);
    const onSubmit = (e) => {
        e.preventDefault();
        axios.put('/api/basicuser/add/' + decodedToken.userId + '/' + dogid)
            .then(
                res =>  {
                 axios.get('/api/basicuser/' + decodedToken.userId)
                .then (res => {
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(res.data));
                    window.location.reload();
                })
            })
            .catch(e => console.log(e));
    }
    return (
        <div>
            <Logo />
            <h4>We are the DoggyDex Team!</h4>
            <div>
                {user ? "logged in" : "not logged in"}
            </div>
            <div>
                {message}
            </div>
            <div>

                {isDogUploaded ? "dog is up" : "dog is not up"}
            </div>
            <button onClick={check}>check</button>
            {user &&
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <input type="number" placeholder="dog breed id" onChange={(val) => { setDogid(val.target.value) }} />
                            <input type="submit" value="Add" />
                        </div>
                    </form>
                    <button onClick={getUserDogs}>get user dogs</button>
                </div>
            }
            <div>
                <Link to="/">Return to Home Screen</Link>
            </div>
        </div>
    )
}

export default Testing

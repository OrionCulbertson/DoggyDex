import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../actions/message";
import { setIsDogUploaded } from "../actions/dogUploaded";
import axios from "axios";
import { useState } from "react";
import authHeader from "../services/auth-header";
import userService from "../services/user.service";


const About = () => {
    const { user } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);
    const { isDogUploaded } = useSelector(state => state.dogUploaded);
    const [dogid, setDogid] = useState(-1);
    // const [userid, setUserid] = useState(undefined);
    const dispatch = useDispatch();
    // const { isDogUploaded: isDogUploaded } = useSelector((state) => state.isDogUploaded);

    const {userDoggyDex} = useSelector(state => state.userDoggyDex);
    const check = () => {
        // dispatch(setMessage("hello"))
        // dispatch(setIsDogUploaded(!isDogUploaded));
        // console.log(JSON.parse(localStorage.getItem("user")));
        axios.get("/api/dogbreed/").then(res => console.log(res.data)).catch(err => console.log(err));
    }

    const getUserDogs = () => {
        console.log(userDoggyDex);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(dogid);
        axios.post(`/api/userdoggydex/add`, {
            userid: user.userId,
            breedid: dogid,
        })
        .then(
            // res => console.log(res.msg)
        )
        .catch(
            e => console.log(e)
        );
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
                            {/* <input type="number" placeholder="user id" onChange={setUserid} /> */}
                            <input type="number" placeholder="dog breed id" onChange={(val) => {setDogid(val.target.value)}} />
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

export default About

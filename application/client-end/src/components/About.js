import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../actions/message";
import { setIsDogUploaded } from "../actions/dogUploaded";
const About = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);
    const { isDogUploaded } = useSelector(state => state.dogUploaded); //NOT WORKING, WHYYYYYYYYY
    const dispatch = useDispatch();
    // const { isDogUploaded: isDogUploaded } = useSelector((state) => state.isDogUploaded);
    const check = () => {
        // dispatch(setMessage("hello"))
        dispatch(setIsDogUploaded(!isDogUploaded));
    }
    return (
        <div>
            <Logo />
            <h4>We are the DoggyDex Team!</h4>
            <div>
                {currentUser ? "logged in" : "not logged in"}
            </div>
            <div>
                {message}
            </div>
            <div>

                {isDogUploaded ? "dog is up" : "dog is not up"}
            </div>
            <button onClick={check}>check</button>
            <div>
                <Link to="/">Return to Home Screen</Link>

            </div>
        </div>
    )
}

export default About

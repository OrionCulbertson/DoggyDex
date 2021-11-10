import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useSelector } from "react-redux";

const About = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    return (
        <div>
            <Logo />
            <h4>We are the DoggyDex Team!</h4>
            <div>
                {currentUser ? "logged in" : "not logged in"}
            </div>
            <Link to="/">Return to Home Screen</Link>
        </div>
    )
}

export default About

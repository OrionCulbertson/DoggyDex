import { Link } from "react-router-dom"
import Logo from "./Logo"

const About = () => {
    return (
        <div>
            <Logo />
            <h4>We are the DoggyDex Team!</h4>
            <Link to="/">Return to Home Screen</Link>
        </div>
    )
}

export default About

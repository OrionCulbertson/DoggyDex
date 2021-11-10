import { BrowserRouter as Link } from "react-router-dom"
import { Button, Logo } from "./"

const Login = () => {
    const onSubmit = async e => {
        //TODO Define
    }
    
    return (
        <>
            <Logo />
            <div className="contentContainer">
            <form onSubmit={onSubmit}>
                <input className="loginForm" type="text" placeholder="Username" required />
                <input className="loginForm" type="password" placeholder="Password" required />
                <Button contents={<div>Login</div>} styleClass="stdButton" type="submit" />
            </form>
            </div>
            <Link to="./create-account" className="switchUserAccountAction">Don't have an account?</Link>
        </>
    );
}

export default Login;

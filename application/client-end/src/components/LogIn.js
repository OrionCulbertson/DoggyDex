import { Link } from 'react-router-dom';
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
                <div className="accountForm">
                    <input className="loginField" type="text" placeholder="Username" required />
                    <input className="loginField" type="password" placeholder="Password" required />
                </div>
                <Button contents={<div>Login</div>} styleClass="stdButton" type="submit" />
            </form>
            </div>
            <div className="switchUserAccountAction">
                <Link to="./create-account">
                    Don't have an account?
                </Link>
            </div>
        </>
    );
}

export default Login;

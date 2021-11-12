import { Link } from 'react-router-dom';
import { Button, Logo } from "./"

const CreateAccount = () => {
    const onSubmit = async e => {
        //TODO Define
    }
    
    return (
        <>
            <Logo />
            <div className="contentContainer">
                <form onSubmit={onSubmit}>
                    <div className="accountForm">
                        <input className="loginField" type="text" placeholder="Name" required />
                        <input className="loginField" type="text" placeholder="Username" required />
                        <input className="loginField" type="text" placeholder="Email" required />
                        <input className="loginField" type="text" placeholder="Verify Email" required />
                        <input className="loginField" type="password" placeholder="Password" required />
                        <input className="loginField" type="password" placeholder="Verify Password" required />
                    </div>
                    <Button contents={<div>Create Account</div>} styleClass="stdButton" type="submit" />
                </form>
            </div>
            <div className="switchUserAccountAction">
                <Link to="./log-in">
                    Already have an account?
                </Link>
            </div>
        </>
    )
}

export default CreateAccount;

import { BrowserRouter as Link } from "react-router-dom"
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
                    <input className="loginForm" type="text" placeholder="Name" required />
                    <input className="loginForm" type="text" placeholder="Username" required />
                    <input className="loginForm" type="text" placeholder="Email" required />
                    <input className="loginForm" type="text" placeholder="Verify Email" required />
                    <input className="loginForm" type="password" placeholder="Password" required />
                    <input className="loginForm" type="password" placeholder="Verify Password" required />
                    <Button 
                        contents={<div>Create Account</div>} 
                        styleClass="stdButton" 
                        type="submit"
                        onClick={()=>console.log('clicked')} 
                    />
                </form>
            </div>
            <Link to="./log-in" className="switchUserAccountAction">Already have an account?</Link>
        </>
    )
}

export default CreateAccount;

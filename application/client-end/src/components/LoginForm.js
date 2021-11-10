import Button from "./Button";

const LoginForm = () => {
    const onSubmit = async e => {
        //TODO Define
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input className="loginForm" type="text" placeholder="Username" required />
                <input className="loginForm" type="password" placeholder="Password" required />
                <Button contents={<div>Login</div>} styleClass="stdButton" type="submit" />
            </form>
        </>
    )
}

export default LoginForm;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Logo } from "."
import { login } from "../actions/auth";
import UserService from "../services/user.service";

const LogIn = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

   

    const onSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        // form.current.validateAll();

        dispatch(login(email, password))
            .then(() => {

                
            })
            .catch((err) => {
                // setLoading(false);
                console.log(err.message);
            });

    }

    if (isLoggedIn) {
        return <Redirect to="/user-profile" />;
    }

    return (
        <>
            
            <div className="contentContainer">
                <form onSubmit={onSubmit}>
                    <div className="accountForm">
                        <input className="loginField" type="email" placeholder="Email" required onChange={onChangeEmail} />
                        <input className="loginField" type="password" placeholder="Password" required onChange={onChangePassword} />
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

export default LogIn;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Logo } from "./"

import { register } from "../actions/auth";
import { useDispatch } from 'react-redux';

const CreateAccount = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onSubmit = async e => {
        e.preventDefault();

        setSuccessful(false);

        dispatch(register(name, username, email, password))
            .then(() => {
                setSuccessful(true);
            })
            .catch((e) => {
                console.log(e);
                setSuccessful(false);
            });
        console.log(`Successful: ${successful}`);
    }

    return (
        <>
            <Logo />
            <div className="contentContainer">
                <form onSubmit={onSubmit}>
                    <div className="accountForm">
                        <input className="loginField" type="text" placeholder="Name" required onChange={onChangeName} />
                        <input className="loginField" type="text" placeholder="Username" required onChange={onChangeUsername} />
                        <input className="loginField" type="email" placeholder="Email" required onChange={onChangeEmail} />
                        <input className="loginField" type="email" placeholder="Verify Email" required />
                        <input className="loginField" type="password" placeholder="Password" required onChange={onChangePassword} />
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

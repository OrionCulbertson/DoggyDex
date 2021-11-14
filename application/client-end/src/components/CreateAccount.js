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

    const validateMatch = (e) => {
        // Find the validation image div
        var validationElement = document.getElementById('nameValidation');
        // Get the form values
        var name1 = document.forms["test"]["name1"].value;
        var name2 = document.forms["test"]["name2"].value;
        // Reset the validation element styles
        validationElement.style.display = 'none';
        validationElement.className = 'validation-image';
        // Check if name2 isn't null or undefined or empty
        if (name2) {
            // Show the validation element
            validationElement.style.display = 'inline-block';
            // Choose which class to add to the element
            validationElement.className += 
                (name1 == name2 ? ' validation-success' : ' validation-error');
        }
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
                        <input className="loginField" type="email" placeholder="Verify Email" onBlur={validateMatch} required />
                        <input className="loginField" type="password" placeholder="Password" required onChange={onChangePassword} />
                        <input className="loginField" type="password" placeholder="Verify Password" onBlur={validateMatch} required />
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

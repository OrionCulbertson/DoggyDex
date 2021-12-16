import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Logo } from './';
import { Redirect } from 'react-router-dom';
import { register } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { FaTimesCircle } from 'react-icons/fa';
import { HiOutlineExclamation } from 'react-icons/hi';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [successful, setSuccessful] = useState(false);
  const [createAccountFail, setCreateAccountFail] = useState(false);
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

  const onSubmit = async (e) => {
    e.preventDefault();

    setSuccessful(false);

    dispatch(register(name, username, email, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch((e) => {
        console.log(e);
        setSuccessful(false);
        setCreateAccountFail(true);
      });
    console.log(`Successful: ${successful}`);
  };

  if (successful) {
    return <Redirect to="/log-in" />;
  }

  const validateEmails = (e) => {
    // Find the validation image div
    var validationElement = document.getElementById('emailValidation');
    // Get the form values
    var email1 = document.forms['createAccountForm']['email1'].value;
    var email2 = document.forms['createAccountForm']['email2'].value;
    // Reset the validation element styles
    validationElement.style.display = 'none';
    validationElement.className = 'validation-image';

    if (email1 !== email2) {
      validationElement.style.display = 'block';
      validationElement.className = 'validation-error';
    } else {
      validationElement.style.display = 'block';
      validationElement.className = 'validation-success';
    }
  };

  const validatePasswords = (e) => {
    // Find the validation image div
    var validationElement = document.getElementById('passwordValidation');
    // Get the form values
    var password1 = document.forms['createAccountForm']['password1'].value;
    var password2 = document.forms['createAccountForm']['password2'].value;
    // Reset the validation element styles
    validationElement.style.display = 'none';
    validationElement.className = 'validation-image';

    if (password1 !== password2) {
      validationElement.style.display = 'block';
      validationElement.className = 'validation-error';
    } else {
      validationElement.style.display = 'block';
      validationElement.className = 'validation-success';
    }
  };
  //consolidate the two above functions

  return (
    <>
      <Logo />
      <div id="createAccountFormContainer" className="contentContainer">
        <form name="createAccountForm" onSubmit={onSubmit}>
          <div className="accountForm">
            <input
              className="loginField"
              type="text"
              placeholder="Name"
              onChange={onChangeName}
              required
            />
            <input
              className="loginField"
              type="text"
              placeholder="Username"
              onChange={onChangeUsername}
              required
            />
            <input
              className="loginField"
              type="email"
              placeholder="Email"
              name="email1"
              onChange={onChangeEmail}
              required
            />
            <input
              className="loginField"
              type="email"
              placeholder="Verify Email"
              name="email2"
              onBlur={validateEmails}
              required
            />
            <input
              className="loginField"
              type="password"
              placeholder="Password"
              name="password1"
              onChange={onChangePassword}
              required
            />
            <input
              className="loginField"
              type="password"
              placeholder="Verify Password"
              name="password2"
              onBlur={validatePasswords}
              required
            />
          </div>
          {createAccountFail && (
            <div className="generalError">
              <HiOutlineExclamation /> Account already exists.{' '}
              <HiOutlineExclamation />
            </div>
          )}
          <div id="emailValidation" class="validation-image">
            Email Match
          </div>
          <div id="passwordValidation" class="validation-image">
            Password Match
          </div>
          <Button
            contents={<div>Create Account</div>}
            styleClass="stdButton"
            type="submit"
          />
        </form>
      </div>
      <div className="switchUserAccountAction">
        <Link to="./log-in">Already have an account?</Link>
      </div>
    </>
  );
};

export default CreateAccount;

import AuthService from "../services/auth.service";
import { FormErrors } from '../FormErrors';
import {Form, Container} from 'reactstrap';
import { Component } from 'react';
import '../../App.css'


class RegisterNewUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      userName: '',
      email: '',
      password: '',

      formErrors: {
      name: '',
      userName: '', 
      email: '', 
      password: ''
    },
      nameValid: false,
      userNameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value },
      () => {this.validateField(e.target.name, e.target.value)});
  }



  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let userNameValid = this.state.userNameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {

      case 'name': 
      nameValid = value.length >= 3 && value.length <= 12;
      fieldValidationErrors.name = nameValid ? '': ' is too short. Must be between 3 and 12 characters';
      break;
      
      case 'userName': 
      userNameValid = value.length >= 4 && value.length <= 10;
      fieldValidationErrors.userName = userNameValid ? '': ' is too short. Must be between 4 and 10 characters';
      break;
      
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;

      default:
        break;
    }
    this.setState({
      formErrors:
      fieldValidationErrors,
      nameValid: nameValid,
      userNameValid: userNameValid,
      emailValid: emailValid,
      passwordValid: passwordValid
      },
      this.validateForm
      );
  }
  validateForm() {
    this.setState({
      formValid: 
      this.state.nameValid
      && this.state.userNameValid
      && this.state.emailValid 
      && this.state.passwordValid});
  }
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  onSubmit = e => {
    e.preventDefault();
    const data = {
        name: this.state.name,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
       }
      AuthService.register(data)
      .then(res =>  {
        this.setState({
              name: '',
              userName: '',
              email:'',
              password:''
            })
        this.props.history.push('/login');
        window.location.reload();
      })
      .catch(err => {
        console.log("Error in CreateNewUser!");
      });
  }

  render () {
    return (
      <Container className="form-container">
      <Form className="demoForm" onSubmit={this.onSubmit}> 
        <h2>Sign up</h2>


        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name</label>
          <input type="text" required className="form-control" name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange} />
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.userName)}`}>
          <label htmlFor="name">Username</label>
          <input type="text" required className="form-control" name="userName"
            placeholder="userName"
            value={this.state.userName}
            onChange={this.onChange}  />
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange}  />
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}  />
        </div>


        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </Form>
      </Container>
    )
  }
}
export default RegisterNewUser;

// Source: https://github.com/learnetto/react-form-validation-demo/blob/master/src/Form.js

import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../../App.css';
import axios from 'axios';


class RegisterNewUser extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        userName: '',
        email:'',
        verifyEmail: '',
        password01:'',
        password02:''
      };
    }

    // Saves inputs as user fills up black fileds
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    // keys below must match key fileds in schema
    // On submit, a call to backend is made to post and save a new object
    onSubmit = e => {
      e.preventDefault();
      const data = {
        name: this.state.name,
        userName: this.state.userName,
        email:this.state.email,
        verifyEmail: this.state.verifyEmail,
        password01: this.state.password01,
        password02: this.state.password02
       }
      axios.post('/api/basicuser/signup/', data)
        .then(res =>  {
          this.setState({
                name: '',
                userName: '',
                email:'',
                verifyEmail: '',
                password01:'',
                password02:''
              })
          this.props.history.push('/');
        })
        .catch(err => {
          console.log("Error in CreateNewUser!");
        })
    };

render () {
  return (
    <div className="spacer">
        <div  id="forms-component">
           <Container className="form-container">
                <Row className="justify-content-center">
                    <Col md="20" className="text-center">
                        <h3 className="subtitle">SignUp</h3>
                    </Col>
                </Row>
           </Container>
        </div>

        <Container className="form-container">
            <Row >
                <Col md="12">
                    <Form className="row" noValidate onSubmit={this.onSubmit}>
                      
                        <FormGroup className="col-md-6">
                            <Label htmlFor="name">Name</Label>
                            <input
                                type='text'
                                placeholder='Name'
                                name='name'
                                className='form-control'
                                value={this.state.name}
                                onChange={this.onChange}
                                />
                        </FormGroup>
                        <FormGroup className="col-md-6">
                            <Label htmlFor="userName">User Name</Label>
                            <input
                                type='text'
                                placeholder='User Name'
                                name='userName'
                                className='form-control'
                                value={this.state.userName}
                                onChange={this.onChange}
                                />
                        </FormGroup>
                        <FormGroup className="col-md-6">
                            <Label htmlFor="email">Email</Label>
                            <input
                               type='text'
                               name='email'
                               placeholder='Enter email'
                               className='form-control'
                               value={this.state.email}
                               onChange={this.onChange}
                              />
                        </FormGroup>

                        <FormGroup className="col-md-6">
                            <Label htmlFor="verifyEmail">Verify Email</Label>
                            <input
                               type='text'
                               name='verifyEmail'
                               placeholder='Verify Email'
                               className='form-control'                       
                               value={this.state.verifyEmail}
                               onChange={this.onChange}
                              />
                        </FormGroup>

                        <FormGroup className="col-md-6">
                            <Label htmlFor="password01">Password</Label>
                            <input
                               type='password'
                               name='password01'
                               placeholder='Password'
                               className='form-control'                            
                               value={this.state.password01}
                               onChange={this.onChange}                            
                               />
                        </FormGroup>

                        <FormGroup className="col-md-6">
                            <Label htmlFor="password02">Confirm Password</Label>
                            <input
                               type='password'
                               name='password02'
                               placeholder='Password'
                               className='form-control'                             
                               value={this.state.password02}
                               onChange={this.onChange}  
                               />
                        </FormGroup>

                        <FormGroup className="col-md-12 ml-3">
                            <Input id="checkbox1" type="checkbox" />
                            <Label htmlFor="checkbox1"> Remember me </Label>
                        </FormGroup>

                        <Col md="12">
                            <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Create an Account</Button>
                            <Button type="submit" className="btn btn-inverse waves-effect waves-light">Cancel</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
         <div >
           <Container className="form-container">
           </Container>
         </div>
    </div>
  );
 }
}

export default RegisterNewUser
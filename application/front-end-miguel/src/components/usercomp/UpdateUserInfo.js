import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class UpdateUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userName: '',
      email: '',
      password01: ''
    };
  }

  componentDidMount() {
    axios
      .get('/api/basicuser/'+this.props.match.params.id)
      .then(res => {
        this.setState({
        name: res.data.name,
        userName: res.data.userName,
        email: res.data.email,
        password01: res.data.password01
        })
      })
      .catch(err => {
        console.log("Error from UpdateUserInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        name: this.state.name,
        userNamse: this.state.userName,
        email: this.state.email,
        password01: this.state.password01
    };

    axios
      .put('/api/basicuser/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-user/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateUserInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateUserInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/show-user-list/" className="btn btn-outline-warning float-left">
                  Show User List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit User's Info.</h1>
              <p className="lead text-center">
                  Update User's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>

            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                placeholder='Name of the User'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
              <div className='form-group'>
              <label htmlFor="userName">Username</label>
              <input
                type='text'
                placeholder='Username'
                name='usernName'
                className='form-control'
                value={this.state.userName}
                onChange={this.onChange}
              />
            </div>


            <div className='form-group'>
            <label htmlFor="email">User's Email</label>
              <input
                type='text'
                placeholder='Email'
                name='email'
                className='form-control'
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="password01">Password</label>
              <input
                type='text'
                placeholder='Password'
                name='password01'
                className='form-control'
                value={this.state.password01}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update User</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateUserInfo;
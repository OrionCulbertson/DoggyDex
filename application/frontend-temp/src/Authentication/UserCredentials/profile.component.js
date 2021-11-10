import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import jwt_decode from 'jwt-decode'; // To decode JW-Token


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: {
           userName: "" 
          }
    };
  }
  
componentDidMount() {
    if (!AuthService.getCurrentUser()) {
     this.setState({ redirect: "/home" });
    } else {

    const currentUserToken = jwt_decode(AuthService.getCurrentUser().token);
    this.setState({ currentUser: currentUserToken, userReady: true })
    }
  }


render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    const { currentUser } = this.state;
    //console.log(currentUser.userName)
    return (
      <div className="container">
    {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
          {currentUser.userName} ID: <strong>{ currentUser.userId}</strong> 
          </h3>
        </header>
        <p>
          <strong>UserName:</strong>{" "}
          {currentUser.userName}
        </p>
        <p>
          <strong>Token expires in:</strong>{" "}
          {currentUser.exp}
        </p>
        <strong>Authorities: N/A</strong>
      </div>: null}
      </div>
    );
  }
}


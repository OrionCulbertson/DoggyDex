// Home.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../App.css';
import {Switch } from "react-router";
import { Navbar } from 'reactstrap';
import {StyledLink} from './style';

import LogInWindow from './LogIn'
import Profile from "./profile.component";
import RegisterNewUser from './UserSignUp'

class Home extends Component {
    render() {
        return (
        <Router>
        
        <div className="homePageBody">

            <section className="Home text-center" >
                <h1 >DoggyDex Debugging</h1>
            </section>


            <Navbar  className="nav-var">
                <nav > 
                    <StyledLink to="/"  className="btn btn-outline  " >HOME</StyledLink> 
                    <StyledLink to="/signup"  className="btn btn-outline  " >SignUp</StyledLink>     
                    <StyledLink to="/login"  className="btn btn-outline  " >LogIn</StyledLink>
                    <StyledLink to="/profile"  className="btn btn-outline  " >User Profile</StyledLink>
                         
                </nav>
            </Navbar>



            <Switch> 
                <Route path='/login' component={LogInWindow} />
                <Route path='/signup/' component={RegisterNewUser} />
                <Route exact path="/profile" component={Profile} />
            </Switch>

    </div>
   </Router>
   );
}
}

export default Home;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Switch } from "react-router";
import { Navbar } from 'reactstrap';


import CreateDogProfile from './components/dogbreedcomp/CreateDogProfile';
import ShowDogList from './components/dogbreedcomp/ShowDogBreedList';
import ShowDogbreedDetails from './components/dogbreedcomp/ShowDogbreedDetails';
import UpdateDogbreedInfo from './components/dogbreedcomp/UpdateDogbreedInfo';

//import CreateUser from './components/usercomp/CreateNewUser';
import ShowUserList from './components/usercomp/ShowUserList';
import ShowUserDetails from './components/usercomp/ShowUserDetails';
import UpdateUserInfo from './components/usercomp/UpdateUserInfo';
import RegisterNewUserForm from './components/usercomp/RegisterNewUserform';



import Home from './components/Home';
import About from './components/About';
import {StyledLink} from './components/style';
import SeachBar from './components/Search';



 class App extends Component {


  render() {
  return (
    <Router>
      
      <div>




      <Navbar  className="nav-var">
     
      <nav > 
      <StyledLink to="/"  className="btn btn-outline  " >HOME</StyledLink> 
      <StyledLink to="/about-us"  className="btn btn-outline  " >About us</StyledLink> 
      <StyledLink to="/register-user"  className="btn btn-outline  " >Register</StyledLink>  
      <StyledLink to="/show-user-list"  className="btn btn-outline  " >All Users</StyledLink> 
      <StyledLink to="/show-dog-list"  className="btn btn-outline  " >All Dog Breeds</StyledLink>

    
      </nav>
      <SeachBar />
      </Navbar>

      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About}/>
        <Route path='/show-dog-list' component={ShowDogList} />
        <Route path='/create-dogbreed' component={CreateDogProfile} />
        <Route path='/edit-dogbreed/:id' component={UpdateDogbreedInfo} />
        <Route path='/show-dogbreed/:id' component={ShowDogbreedDetails} />

        <Route path='/register-user' component={RegisterNewUserForm} />
        <Route path='/show-user-list' component={ShowUserList} />
        <Route path='/edit-user/:id' component={UpdateUserInfo} />
        <Route path='/show-user/:id' component={ShowUserDetails} />
        <Route path='/register-user' component={RegisterNewUserForm} />
        <Route path='/edit-user/:id' component={UpdateUserInfo} />
        </Switch>
        </div>
      </Router>
    );
  }
}


    export default App;



    //    <Route path='/create-user' component={CreateUser} />
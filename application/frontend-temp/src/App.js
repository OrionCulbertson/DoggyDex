import { BrowserRouter as Router} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



import HomeWindow from './Authentication/UserCredentials/Home'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <HomeWindow/>
        </div>
      </Router>
    );
  }
}

export default App;



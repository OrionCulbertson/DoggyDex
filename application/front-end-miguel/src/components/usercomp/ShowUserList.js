import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import UserCard from './UserCard';

class ShowUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }


  componentDidMount() {
    axios
      .get('/api/basicuser/')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowUserList');
      })
  };


  render() {
    const users = this.state.users;
    //console.log("PrintUser: " + users);
    let userList;

    if(!users) {
        userList = "there is no user record!";
    } else {
        userList = users.map((user, k) =>
        <UserCard user={user} key={k} />
      );
    }

    return (
      <div className="ShowUserList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Users List</h2>
            </div>

            <div className="col-md-11">
              <br />
              <br />
              <hr className="new1"/>
            </div>

          </div>

          <div className="list">
                {userList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowUserList;







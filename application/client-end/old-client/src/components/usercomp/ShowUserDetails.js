import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class showUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {

    axios
      .get('/api/basicuser/'+this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
            user: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowUserDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('/api/basicuser/' + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowUserDetails_deleteClick");
      })
  };


  render() {

    const userx = this.state.user;
    let User = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <thead>

          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ userx.name }</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>User Name</td>
            <td>{ userx.userName }</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Email</td>
            <td>{ userx.email }</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Password</td>
            <td>{ userx.password01 }</td>
          </tr>

        </thead>
      </table>
    </div>

    return (
      <div className="ShowUserDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show User List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">User's Record</h1>
              <p className="lead text-center">
                  View User's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { User }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,userx._id)}>Delete User</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-user/${userx._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit User
              </Link>
              <br />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default showUserDetails;
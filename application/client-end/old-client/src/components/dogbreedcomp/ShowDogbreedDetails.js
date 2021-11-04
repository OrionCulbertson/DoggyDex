import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class ShowDogbreedDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {}
    };
  }

  componentDidMount() {
    //console.log("Print id: " + this.props.match.params.id);
    axios
      .get('/api/dogbreed/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          dogs: res.data
        })
      })
      .catch(err => {
        console.log("Error from showDogbreedDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('/api/dogbreed/' + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form showDogbreedDetails_deleteClick");
      })
  };



  render() {
    const dogx = this.state.dogs;
   
    let Dog = <div>
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
            <td>Breed</td>
            <td>{ dogx.dogbreed }</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>ID</td>
            <td>{ dogx.breedid }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Description</td>
            <td>{ dogx.description }</td>
          </tr>

        </thead>
      </table>
    </div>

    return (
      <div className="ShowUserDetails">
        <div className="container">
          <div className="row">

            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Dog Breed Record</h1>
              <p className="lead text-center">
                  View Dogbreed Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { Dog }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this, dogx._id)}>Delete Dogbreed</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-dogbreed/${dogx._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Update dog breed info.
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default ShowDogbreedDetails;
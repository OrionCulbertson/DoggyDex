import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DogCard from './DogCard';

class ShowDogBreedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogbreeds: []
    };
  }


  componentDidMount() {
    axios
      .get('/api/dogbreed')
      .then(res => {
        this.setState({
          dogbreeds: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowDogBreedList');
      })
  };


  render() {
    const dogs = this.state.dogbreeds;
   // console.log("PrintUser: " + dogs);
    let dogsList;

    if(!dogs) {
      dogsList = "there is no user record!";
    } else {
      dogsList = dogs.map((dogs, k) =>
        <DogCard  dogbreed={dogs} key={k} />
      );
    }

    return (
      <div className="ShowDogBreedList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Dogbreed List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-dogbreed" className="btn btn-outline-warning float-left">
                + Add New Dogbreed
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {dogsList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDogBreedList;







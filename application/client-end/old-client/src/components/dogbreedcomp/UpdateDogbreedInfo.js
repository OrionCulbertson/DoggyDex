import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

class UpdateDogBreedInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogbreed: '',
      breedid: '',
      description: ''
    };
  }

  componentDidMount() {
    axios
      .get('/api/dogbreed/'+this.props.match.params.id)
      .then(res => {
        this.setState({
        dogbreed: res.data.dogbreed,
        breedid: res.data.breedid,
        description: res.data.description
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
      dogbreed: this.state.dogbreed,
      breedid: this.state.breedid,
      description: this.state.description
    };

    axios
      .put('http://localhost:8082/api/dogbreed/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-dogbreed/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateUserInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateDogBreedInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Dogbreed Info.</h1>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="breed">Dog Breed</label>
              <input
                type='text'
                placeholder='Breed'
                name='dogbreed'
                className='form-control'
                value={this.state.dogbreed}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="dogbreedid">Dog breed ID</label>
              <input
                type='text'
                placeholder='ID'
                name='dogbreed'
                className='form-control'
                value={this.state.breedid}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Dog Breed Description</label>
              <textarea
                 placeholder='Description'
                 name='description'
                 className='form-control'
                 rows="3"
                    value={this.state.description}
                    onChange={this.onChange}
                    onBlur={this.onChange.bind(this)} >
              </textarea>
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Breed</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateDogBreedInfo;
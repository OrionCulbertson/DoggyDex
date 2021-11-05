import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';

class AddDogBreed extends Component {
  constructor() {
    super();
    this.state = {
      dogbreed: '',
      breedid:'',
      description:'',
      img: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      dogbreed: this.state.dogbreed,
      breedid: this.state.breedid,
      description: this.state.description,
      img: this.state.img 
    };

    axios
      .post('/api/dogbreed/', data)
      .then(res => {
        this.setState({
          dogbreed: '',
          breedid:'',
          description:'',
          img: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in Add New Dogbreed!");
      })
  };
  render() {
    return (
      <div className="CreateNewDogBreed">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <div className="col-md-8 m-auto">

              <p className="lead text-center">
                  Add Dogbreed
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Dogbreed'
                    name='dogbreed'
                    className='form-control'
                    value={this.state.dogbreed}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Dogbreed ID'
                    name='breedid'
                    className='form-control'
                    value={this.state.breedid}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
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

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Image URL'
                    name='img'
                    className='form-control'
                    value={this.state.img}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          <div className="col-md-8 m-auto">
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDogBreed;

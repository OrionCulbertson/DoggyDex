import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDogs } from '../actions/dogActions';
import { BrowseRoute as Router, useHistory} from 'react-router-dom';

function DoggyDex({ dogData, fetchDogs }) { 
    console.log('dogData', dogData)
    const history = useHistory();

    useEffect(() => {
       
        fetchDogs()
    }, [] );

   const handleClick = (dogs) => {
        console.log('dogs', dogs);

        history.push('/doginfo', {dog: dogs});
   }

    //     const loading = "<h2> woof woof loading </h2>";
    //     const loadErr = `<h2> ${dogData.error} </h2>`;
    //     const loadDogs = `<div> ${dogData && dogData.dogs && dogData.dogs.map(dogs => <p>${dogs.dogbreed}</p>)}</div>`    ;
    //     return dogData.loading ? (loading) : dogData.error ? (loadErr) : (loadDogs);
    // }
    
    return dogData.loading ? (
        <h2>Loading</h2>
       
    ) : dogData.error ? (
        <h2>{dogData.error}</h2>
    ) : (
        
        <div className ="contentContainer">
            {dogData &&
            dogData.dogs &&
            dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}>{dogs.dogbreed}</button>)}
        </div>
        
    )

}

    const mapStateToProps = state => {
        return {
            dogData: state.dogReducer
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            fetchDogs: () => dispatch(fetchDogs())
        };
    };





export default connect(mapStateToProps, mapDispatchToProps)(DoggyDex) 
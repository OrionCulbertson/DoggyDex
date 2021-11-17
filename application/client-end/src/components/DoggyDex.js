import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDogs } from '../actions/dogActions';
import { DoggyDexToggle } from '../components'

function DoggyDex({ dogData, fetchDogs }) { 
    
    



    useEffect(() => {
       
        fetchDogs()
    }, [] );

    
    return dogData.loading ? (
        <h2>Loading</h2>
       
    ) : dogData.error ? (
        <h2>{dogData.error}</h2>
    ): (<DoggyDexToggle dogData={dogData}/>)

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


//{isChecked ? "Switch to Personal DoggyDex" : "Switch to Learning Mode"}

// ) : (
    //     <div>
    //         <div className ="contentContainer">
    //             {dogData &&
    //             dogData.dogs &&
    //             dogData.dogs.map(dogs => <button id='dogs' onClick={() => handleClick(dogs)}>{dogs.dogbreed}</button>)}
    //         </div>
    //         <div className="contentContainer">
    //             <input
                    
    //                 type="checkbox"
    //                 checked={isChecked}
    //                 onChange={handleChange}
    //                 value="TEST"
    //             />
                    
    //             {isChecked ? "Switch to Personal DoggyDex" : "Switch to Learning Mode"}
    //         </div>
    //     </div>
        
    // )
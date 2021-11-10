import React from 'react'
import axios from 'axios'

const DoggyDex = () => {
    

    axios.get('/api/dogbreed')
                .then(response => {
                console.log(response);
            }); 
    return (
        <div>
                    
        </div>
    )
}


export default DoggyDex
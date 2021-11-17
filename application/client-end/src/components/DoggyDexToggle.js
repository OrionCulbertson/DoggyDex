import React, { useState } from 'react'
import { LearningModeDoggyDex, PersonalDoggyDex } from './';


const DoggyDexToggle = ({ dogData }) => {
    
    const [isChecked, setIsChecked] = useState(false);
    
    const handleChange = () => {
        console.log("I am being checked!")
        setIsChecked(!isChecked);
    }
    return (
        
        <div>
            <div>
                {isChecked ? <PersonalDoggyDex/> : <LearningModeDoggyDex dogData={dogData}/>}
            </div>
            <div className="contentContainer">
                <input
                    
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                />
                {isChecked ? "Switch to Learning Mode" : "Switch to Personal Mode"}
            </div>
          
        </div>
        
    )
}

export default DoggyDexToggle

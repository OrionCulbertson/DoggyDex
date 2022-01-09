import React, { useState } from 'react';
import { LearningModeDoggyDex, PersonalDoggyDex } from './';

const DoggyDexToggle = ({ dogData }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div>
        {isChecked ? (
          <PersonalDoggyDex dogData={dogData} />
        ) : (
          <LearningModeDoggyDex dogData={dogData} />
        )}
      </div>
      <div className="contentContainer" id="toggle-dex">
        {isChecked ? 'Switch to Learning Mode' : 'Switch to Personal Mode'}
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </div>
    </div>
  );
};

export default DoggyDexToggle;

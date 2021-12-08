import React from 'react';
import paws from '../resources/paws.gif';
const DogResultLoading = () => {
  return (
    <div>
      <h2 className="bigText">Looking for dogs...</h2>
      <div className="loadingPaws">
        <img className="loadingPaws" src={paws} alt='loading gif' />
      </div>
    </div>
  );
};

export default DogResultLoading;

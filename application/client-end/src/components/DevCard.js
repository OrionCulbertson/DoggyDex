import React from "react";

const DevCard = ({ dev }) => {
  return (
    <div className="contentContainer">
      <img src={dev.photo} className="devPhoto" />
      <div className="devName">{dev.name}</div>
      <hr />
      <p>
        <pre className="devText">{`${dev.about}`}</pre>
      </p>
    </div>
  );
};

export default DevCard;

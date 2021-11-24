import React from 'react';

const ProfileLine = ({ title, contents }) => {
  return (
    <div class="profileLine">
      <div>{`${title}:`}</div>
      <div>{contents}</div>
    </div>
  );
};

export default ProfileLine;

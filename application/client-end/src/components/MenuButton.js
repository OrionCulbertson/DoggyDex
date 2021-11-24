import React from 'react';

const MenuButton = ({ func, contents }) => {
  return (
    <button className="MenuButton" onMouseDown={func}>
      {contents}
    </button>
  );
};

export default MenuButton;

const Button = ({ contents, onClick, styleClass, color, type }) => {
  return (
    <button
      className={styleClass}
      onClick={onClick}
      style={{ backgroundColor: color }}
      type={type}
    >
      {contents}
    </button>
  );
};

export default Button;

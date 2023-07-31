const NavButton = ({ onClick, text }) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      {text}
    </button>
  );
};

export default NavButton;

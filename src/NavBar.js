import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default NavBar;

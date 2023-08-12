import React from "react";
import chilli from "../chilli.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={chilli} alt="" width={50} height={38} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

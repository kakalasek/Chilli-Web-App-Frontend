import React from "react";
import chilli from "../../chilli.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border border-4 border-success rounded m-2">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={chilli} alt="" width={50} height={38} />
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="seeds">
              Seeds
            </Link>
            <Link className="nav-link" to="plants">
              Plants
            </Link>
            <Link className="nav-link" to="archive">
              Archive
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

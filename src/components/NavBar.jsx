/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          QUATRO
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/catalog">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
                <span>
                  {props.cartTotal > 0 && (
                    <span className="badge bg-danger ms-2">
                      {props.cartTotal}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          </ul>
          <span className="navbar-text">Style. Strut. Sustain.</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

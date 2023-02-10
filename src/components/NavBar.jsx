/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="CartPage.jsx">
                Cart
                <span>
                  {props.cartTotal > 0 && (
                    <span className="badge bg-danger ms-2">
                      {props.cartTotal}
                    </span>
                  )}
                </span>
              </a>
            </li>
          </ul>
          <span className="navbar-text">Style. Strut. Sustain.</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

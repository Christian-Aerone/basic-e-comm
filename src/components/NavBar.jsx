/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
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
                <a class="nav-link" href="CartPage.jsx">
                  Cart
                  <span>
                    {this.props.cartTotal > 0 && (
                      <span className="badge bg-danger ms-2">
                        {this.props.cartTotal}
                      </span>
                    )}
                  </span>
                </a>
              </li>
            </ul>
            <span class="navbar-text">Style. Strut. Sustain.</span>
          </div>
        </div>
      </nav>
    );
  }
}

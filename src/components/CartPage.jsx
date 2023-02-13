import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartPage extends Component {
  render() {
    console.log("cart page rendered");
    return (
      <>
        <Link className="container text-center" to="/newItem">
          <button className="btn btn-outline-success ms-4">Add Item</button>
        </Link>

        
      </>
    );
  }
}

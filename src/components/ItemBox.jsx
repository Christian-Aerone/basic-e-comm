import React, { Component } from "react";

export default class ItemBox extends Component {
  itemName() {
    return this.props.item.title;
  }
  itemDescription() {
    return this.props.item.body;
  }
  itemQty() {
    return this.props.item.qty;
  }
  itemImg() {
    return this.props.item.img;
  }
  render() {
    const { item } = this.props;
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div>
              <img src={this.itemImg()} alt="t-shirt"></img>
            </div>
            <div>
              <span>
                <strong>{this.itemName()}</strong>
              </span>
            </div>
            <div>
              <span>
                <em>{this.itemDescription()}</em>
              </span>
            </div>
            <div>
              <span>Quantity: {this.itemQty()}</span>
            </div>
          </div>
          <button
            onClick={() => this.props.onAddToCart(item.id)}
            className="btn btn-outline-primary ms-4"
          >
            Add To Cart
          </button>

          <button
            onClick={() => this.props.onAddItem(item.id)}
            className="btn btn-outline-success ms-4"
            disabled={item.selected === false}
          >
            Add
          </button>
          <button
            onClick={() => this.props.onSubtractItem(item.id)}
            className="btn btn-outline-warning ms-4"
            disabled={item.selected === false || item.qty === 0}
          >
            Remove
          </button>
          <button
            onClick={() => this.props.onClearItem(item.id)}
            className="btn btn-outline-dark ms-4"
            disabled={item.selected === false || item.qty === 0}
          >
            Clear
          </button>
        </div>
      </>
    );
  }
}

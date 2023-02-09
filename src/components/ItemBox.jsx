import React, { Component } from "react";

export default class ItemBox extends Component {
  itemName() {
    return this.props.item.title;
  }
  itemDescription () {
    return this.props.item.body;
  }
  itemQty () {
    return this.props.item.qty;
  }
  render() {
    const { item } = this.props;
    return (
      <>
        <div className="m-5">
          <span>{this.itemName()}</span>
          <span>{this.itemDescription()}</span>
          <span>{this.itemQty()}</span>
          <button
            onClick={() => this.props.onAddItem(item.id)}
            className="btn btn-primary ms-4"
          >
            Add Item
          </button>
          <button
            onClick={() => this.props.onSubtractItem(item.id)}
            className="btn btn-warning ms-4"
            disabled={item.selected === false || item.qty === 0}
          >
            Subtract Item
          </button>
        </div>
      </>
    );
  }
}

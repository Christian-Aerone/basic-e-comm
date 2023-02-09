import React, { Component } from "react";
import ItemBox from "./ItemBox";

export default class Catalog extends Component {
  render() {
    const { onClearItem, onAddItem, onSubtractItem, onAddToCart, items } = this.props;

    return (
      <div>
        
        {items.map((item) => (
          <ItemBox
            onClearItem={onClearItem}
            onAddItem={onAddItem}
            onSubtractItem={onSubtractItem}
            onAddToCart = {onAddToCart}
            item = {item}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

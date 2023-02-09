import React, { Component } from "react";
import ItemBox from "./ItemBox";

export default class Catalog extends Component {
  render() {
    const { onDeleteItem, onAddItem, onSubtractItem, items } = this.props;

    return (
      <div>
        
        {items.map((item) => (
          <ItemBox
            onDeleteItem={onDeleteItem}
            onAddItem={onAddItem}
            onSubtractItem={onSubtractItem}
            item = {item}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

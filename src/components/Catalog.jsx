import React from "react";
import ItemBox from "./ItemBox";

const Catalog = ({
  onClearItem,
  onAddItem,
  onSubtractItem,
  onAddToCart,
  items,
}) => {
  console.log("catalog page rendered");
  return (
    <div>
      {items.map((item) => (
        <ItemBox
          onClearItem={onClearItem}
          onAddItem={onAddItem}
          onSubtractItem={onSubtractItem}
          onAddToCart={onAddToCart}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Catalog;

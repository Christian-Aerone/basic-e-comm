import React, { useEffect } from "react";

const ItemBox = ({
  item,
  onClearItem,
  onAddItem,
  onSubtractItem,
  onAddToCart,
}) => {
  useEffect(() => {
    return () => {
      console.log("component unmounting...");
    };
  }, []);

  const itemName = () => {
    return item.title;
  };
  const itemDescription = () => {
    return item.body;
  };
  const itemQty = () => {
    return item.qty;
  };
  const itemImg = () => {
    return item.img;
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div>
            <img src={itemImg()} alt="t-shirt"></img>
          </div>
          <div>
            <span>
              <strong>{itemName()}</strong>
            </span>
          </div>
          <div>
            <span>
              <em>{itemDescription()}</em>
            </span>
          </div>
          <div>
            <span>Quantity: {itemQty()}</span>
          </div>
        </div>
        <button
          onClick={() => onAddToCart(item.id)}
          className="btn btn-outline-primary ms-4"
        >
          Add To Cart
        </button>

        <button
          onClick={() => onAddItem(item.id)}
          className="btn btn-outline-success ms-4"
          disabled={item.selected === false}
        >
          Add
        </button>
        <button
          onClick={() => onSubtractItem(item.id)}
          className="btn btn-outline-warning ms-4"
          disabled={item.selected === false || item.qty === 0}
        >
          Remove
        </button>
        <button
          onClick={() => onClearItem(item.id)}
          className="btn btn-outline-dark ms-4"
          disabled={item.selected === false || item.qty === 0}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default ItemBox;

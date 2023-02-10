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
            <img src={itemImg()} alt="t-shirt" className="p-5"></img>
          </div>
          <div className="p-2">
            <span>
              <h1>{itemName()}</h1>
            </span>
          </div>
          <div className="p-3">
            <span>
              <h7><em>{itemDescription()}</em></h7>
            </span>
          </div>
          <div className="p-4">
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

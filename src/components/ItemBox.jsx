import React from "react";
import { Link } from "react-router-dom";
const ItemBox = ({
  item
}) => {

  console.log("itembox page rendered");

  const itemName = () => {
    return item.title;
  };
  const itemImg = () => {
    return item.img;
  };

  return (
    <>
      <div className="container text-center">
        <div className="col">
          <div>
            <img src={itemImg()} alt="t-shirt" className="p-5"></img>
          </div>
          <div className="p-5">
            <span>
              <h1>{itemName()}</h1>
            </span>
          </div>
        </div>
        <Link to={`/catalog/${item.id}`}>
          <button className="btn btn-outline-dark">View More</button>
        </Link>
      </div>
    </>
  );
};

export default ItemBox;

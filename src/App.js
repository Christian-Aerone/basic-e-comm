import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import CartPage from "./components/CartPage";
import { NotFound } from "./components/NotFound";
import { ItemDetails } from "./components/ItemDetails";
import AddItem  from "./components/AddItem";
import { PRODUCTS_DATA } from "./data/products";

function App() {
  const [items, setItems] = useState(PRODUCTS_DATA);

  useEffect(() => {
    console.log("items change");
  }, [items]);

  const handleAddItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      })
    );
  };

  const handleClearItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: 0,
            selected: false,
          };
        }
        return item;
      })
    );
  };

  const handleSubtractItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      })
    );
  };

  const handleAddToCart = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
            selected: true,
          };
        }
        return item;
      })
    );
  };

  const cartTotal = () => {
    return items.filter((item) => item.qty > 0).length;
  };

  return (
    <>
      <NavBar cartTotal={cartTotal()} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/catalog" />} />
          <Route
            path="/catalog"
            element={
              <Catalog
                items={items}
                onClearItem={handleClearItem}
                onAddItem={handleAddItem}
                onSubtractItem={handleSubtractItem}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/catalog/:id"
            element={
              <ItemDetails
                items={items}
                onClearItem={handleClearItem}
                onAddItem={handleAddItem}
                onSubtractItem={handleSubtractItem}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/newItem" element={<AddItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

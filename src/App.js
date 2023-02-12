import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import CartPage from "./components/CartPage";
import { NotFound } from "./components/NotFound";
import { ItemDetails } from "./components/ItemDetails";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446935/item/goods_00_446935.jpg?width=750",
      title: "T-shirt",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet lectus non dolor fringilla tempus. Aenean tempor, justo ac molestie cursus, dui quam ultrices ligula, nec dignissim leo mauris nec orci.",
      qty: 0,
      selected: false,
    },
    {
      id: 2,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/451330/item/goods_27_451330.jpg?width=750",
      title: "Shorts",
      body: "Aenean bibendum, turpis in tristique sagittis, lacus sem ullamcorper sapien, vel faucibus nibh sem ut libero. Suspendisse lacus ex, ultricies auctor rutrum ut, malesuada quis elit. Sed ultricies est quis finibus cursus.",
      qty: 0,
      selected: false,
    },
    {
      id: 3,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455369/item/goods_37_455369.jpg?width=750",
      title: "Jacket",
      body: "Nulla quam nulla, vehicula sit amet risus ut, pretium volutpat leo. Nulla facilisi. Donec tincidunt eros turpis, placerat pretium ante blandit nec. Integer eu ligula ultrices, condimentum sem in, tristique lorem.",
      qty: 0,
      selected: false,
    },
  ]);

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

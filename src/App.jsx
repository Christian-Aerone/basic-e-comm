import React, { Component } from "react";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446935/item/goods_00_446935.jpg?width=750",
        title: "T-shirt",
        body: "Patugtog ng kanta ni Shontelle T-shirt, habang nagiinarte sa banyo na walang shower.",
        qty: 0,
        selected: false,
      },
      {
        id: 2,
        img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/451330/item/goods_27_451330.jpg?width=750",
        title: "Shorts",
        body: "Shorts parang relasyon niyong 'di nagtagal",
        qty: 0,
        selected: false,
      },
      {
        id: 3,
        img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455369/item/goods_37_455369.jpg?width=750",
        title: "Jacket",
        body: "Kahit mainit basta magmukhang pogi, pwede na",
        qty: 0,
        selected: false,
      },
    ],
  };

  handleClearItem = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: 0,
            selected: false,
          };
        }
        return item;
      }),
    });
  };

  handleAddItem = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      }),
    });
  };

  handleSubtractItem = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      }),
    });
  };

  handleAddToCart = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
            selected: true,
          };
        }
        return item;
      }),
    });
  };

  cartTotal = () => {
    return this.state.items.filter((item) => item.qty > 0).length;
  };

  render() {
    return (
      <div>
        <NavBar cartTotal = {this.cartTotal()}/>
        <div className="container">
          <Catalog
            items={this.state.items}
            onClearItem={this.handleClearItem}
            onAddItem={this.handleAddItem}
            onSubtractItem={this.handleSubtractItem}
            onAddToCart={this.handleAddToCart}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'
import Catalog from './components/Catalog';

export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "T-shirt",
        body: "Patugtog ng kanta ni Shontelle T-shirt, habang nagiinarte sa banyo na walang shower.",
        qty: 0,
        selected: false
      },
      {
        id: 2,
        title: "Shorts",
        body: "Shorts parang relasyon niyong 'di nagtagal",
        qty: 0,
        selected: false
      },
      {
        id: 3,
        title: "Jacket",
        body: "Kahit mainit basta magmukhang pogi, pwede na",
        qty: 0,
        selected: false
      },
    ],
  }

  handleDeleteItem = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  handleAddItem = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
            selected: true
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


  render() {
    return (
      <div className='container'>
        <Catalog
          items={this.state.items}
          onDeleteItem={this.handleDeleteItem}
          onAddItem={this.handleAddItem}
          onSubtractItem={this.handleSubtractItem}
        />
      </div>
    )
  }
}


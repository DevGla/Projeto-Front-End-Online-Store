import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Paginas/Home';
import CarrinhoDeCompras from './Paginas/CarrinhoDeCompras';
import ProductDetail from './Paginas/ProductDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="cartButtonContainer" />
        <Route exact path="/" component={ Home } />
        <Route path="/carrinho" component={ CarrinhoDeCompras } />
        <Route path="/item/:id" render={ (props) => (<ProductDetail { ...props } />) } />
      </BrowserRouter>
    );
  }
}

export default App;

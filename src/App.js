import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>         
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        
      </React.Fragment>
    );

  }
}

export default App;

import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import {createStore} from 'redux';
import reducer from './reducer';

const initialStore = {
  count:0,
  name: 'Jhon'
  }
const store = createStore(reducer,initialStore);
store.dispatch({type:'DECREASE'});
store.dispatch({type:'INCREASE'});
store.dispatch({type:'RESET'});
store.dispatch({type:'CHANGE_NAME'});
console.log(store.getState())



function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;

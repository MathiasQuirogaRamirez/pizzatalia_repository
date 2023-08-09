import logo from './logo.svg';
//import './App.css';

import NavBar from "./components/NavBar/NavBar";
import CardProductContainer from './components/CardProductContainer/CardProductContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardProductDeailContainer from './components/CardProductDetailContainer/CardProductDetailContainer';
import { CartContextProvider } from './context/cartContext';
import ShoppingCartContainer from './components/ShoppingCartContainer/ShoppingCartContainer';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<CardProductContainer></CardProductContainer>}></Route>
            <Route path="/category/:id_category" element={<CardProductContainer></CardProductContainer>}></Route>
            <Route path="/product/:id" element={<CardProductDeailContainer></CardProductDeailContainer>}></Route>
            <Route path="/cart" element={<ShoppingCartContainer/>}></Route>
            <Route path="/order-confirmation/:id" element={<OrderConfirm></OrderConfirm>}></Route>
            <Route path="/order-user" element={<Checkout></Checkout>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div> 
  );
}

export default App;

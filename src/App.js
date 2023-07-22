import logo from './logo.svg';
//import './App.css';

import NavBar from "./components/NavBar/NavBar";
import CardProductContainer from './components/CardProductContainer/CardProductContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardProductDeailContainer from './components/CardProductDetailContainer/CardProductDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<CardProductContainer></CardProductContainer>}></Route>
          <Route path="/category/:id_category" element={<CardProductContainer></CardProductContainer>}></Route>
          <Route path="/product/:id" element={<CardProductDeailContainer></CardProductDeailContainer>}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;

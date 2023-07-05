import logo from './logo.svg';
//import './App.css';

import CardProduct from "./components/CardProduct/CardProduct";
import NavBar from "./components/NavBar/NavBar";
import TitleSection from './components/TitleSection/TitleSection';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <TitleSection title="Pizzas"></TitleSection>
      <div className="container">
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        <CardProduct title="Carbonara" description="Crema fresca, bacon, champiñones y cebolla"></CardProduct>
        </div>
    </div>
  );
}

export default App;

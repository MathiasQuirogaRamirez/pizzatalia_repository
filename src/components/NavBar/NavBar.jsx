import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./style.css"

function NavBar () {

    return (
        <div className="container_navbar">
            <Link to="/"><img className="img_logo" src="/assets/logo.png"></img></Link>
            <ul className="ul_navbar">
                <li className="li_navbar"><Link className="link" to="/cart"><ShoppingCart></ShoppingCart></Link></li>
                <li className="li_navbar"><Link className="link" to="/category/desserts">Desserts</Link></li>
                <li className="li_navbar"><Link className="link" to="/category/starters">Starters</Link></li>
                <li className="li_navbar"><Link className="link" to="/category/pizza">Pizzas</Link></li>
            </ul>
        </div>
    );

}

export default NavBar; 
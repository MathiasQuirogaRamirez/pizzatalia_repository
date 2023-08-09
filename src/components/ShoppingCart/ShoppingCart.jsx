import "./style.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function ShoppingCart () {

    const context = useContext(cartContext);
    let html = "";

    const total = context.cart.reduce((acumulator, current) => {
        return acumulator + current.quantity;
    }, 0);

    if (total === 0) {
        html = <div className="container_shopping">
        <img className="img_shopping" src="/assets/shopping_cart64.png"></img>
        </div>;
    } else {
        html = <div className="container_shopping">
        <img className="img_shopping" src="/assets/shopping_cart64.png"></img>
        <h3 className="count_shopping">{total}</h3>
        </div>;
    }
   
    return (
        html
    );

}

export default ShoppingCart; 
import "./style.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function ShoppingCartContainer () {

    const {cart, removeProduct, setProduct, getPriceDiscount, getPrice, getPriceTotal} = useContext(cartContext);

    function handleSetCar (product, quantity) {
        if(quantity === 0) {
            removeProduct(product);
        }
        else
            setProduct(product, quantity);
    }

    return (
        <div className="container">
            <div>
                {cart.map((item) => (
                    <div className="container_list_item">
                        <h3>{item.name}</h3>
                        <ItemCount onClick={handleSetCar} initial_count={item.quantity} product={item}></ItemCount>
                        {item.discount ? <h3>{getPriceDiscount(item.price, item.discount, item.quantity)}</h3>
                        :
                        <h3>{getPrice(item.price, item.quantity)}</h3>}
                    </div>
                ))}
                <div className="container_list_bottom">
                    <h3 className>{getPriceTotal()}</h3>
                    {cart.length > 0 ? <Link className="link" to="/order-user"><Button text="Continue shopping"></Button></Link> : <h3 className="centered">Empty cart</h3>}
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartContainer;
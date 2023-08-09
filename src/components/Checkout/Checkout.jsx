import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import "./style.css";
import Button from "../Button/Button";

function Checkout () {
  const [user, setUser] = useState({
    name: "",
    email: "",
    adress: "",
  });

  const { cart, reloadCart, getPriceTotal } = useContext(cartContext);
  const navigate = useNavigate();
  const total = getPriceTotal();

  async function handleCheckout (evt) {
    evt.preventDefault();

    const order = {
        items: cart,
        user: user,
        date: new Date(),
        total: total,
    };

    try{
        const id_order = await createOrder(order);
        navigate(`/order-confirmation/${id_order}`);
        reloadCart();
    } catch (error){
        console.log(error.message);
    }
  }

  function onInputChange (evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...user };
    newState[field] = value;
    setUser(newState);
  }

  function resetForm (e) {
    e.preventDefault();
    setUser({
      name: "",
      email: "",
      adress: "",
    });
  }

  return (
    <form>
      <div className="container">
        <h3>Complete the purchase data</h3>
      </div>

      <div className="container">
        <input className="button" value={user.name} name="name" type="text" placeholder="Name" onChange={onInputChange}/>
        <input className="button" value={user.email} name="email" type="email" placeholder="Email" onChange={onInputChange}/>
        <input className="button" value={user.adress} name="adress" type="text" placeholder="Adress" onChange={onInputChange}/>
      </div>

      <div className="container">
      {(user.name !== "" && user.email !== "" && user.adress !== "") === true && <Button text="Buy now" onClick={handleCheckout}></Button>}
            <Button onClick={resetForm} text="Cancel"></Button>
        </div>
    </form>
  );
}

export default Checkout;
import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });
    
function CartContextProvider (props) {
    const [cart, setCart] = useState([]);

    function addProduct (product, quantity) {

        const found = cart.find(element => element.id === product.id);
        
        if(found) { 
            const products = [...cart];

            products.forEach(item => {
                if(item.id === product.id)
                    item.quantity = found.quantity + quantity;
            });     
            setCart(products);
        } else
            setCart([...cart, {...product, quantity}]);
    }

    function setProduct (product, quantity) {
        const products = [...cart];

            products.forEach(item => {
                if(item.id === product.id)
                    item.quantity = quantity;
            });     
            setCart(products);        
    }

    function removeProduct (product) {
        //const found = cart.find(element => element.id === id);
        const products = [...cart];
        const index = products.indexOf(product);
        products.splice(index, 1);
        setCart(products);
    }

    function searchProduct (id) {
        if (cart.find(element => element.id === id))
            return true;
        return false;
    }

    function reloadCart () {
        setCart([]);
    }

    const getPrice = (price, quantity) => {
        return price * quantity;
    };

    const getPriceDiscount = (price, discount, quantity) => {
        return (price - (price / 100 * discount)).toFixed(2) * quantity;
    };

    const getPriceTotal = () => {
        let total = 0;
        cart.forEach(item => {
            item.discount ? total += getPriceDiscount(item.price, item.discount, item.quantity)
            :
            total += getPrice(item.price, item.quantity);
        });   
        if(total === 0)
            return "";
        return total.toFixed(2);  
    };

    return (
        <cartContext.Provider value={{cart, addProduct, removeProduct, setProduct, searchProduct, reloadCart,
        getPriceDiscount, getPrice, getPriceTotal}}>
            {props.children}
        </cartContext.Provider>
    );
}

export { cartContext, CartContextProvider };
import ImageProduct from "../ImageProduct/ImageProduct";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./style.css";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import { useContext, useState} from "react";

//#DC0D0D red
//#1DAD22 green

function CardProduct (props) {

    const {id, name, description, price, detail, url, discount} = props;
    const product = {id, name, description, price, detail, url, discount};
    const { addProduct, searchProduct } = useContext(cartContext);
    const [productExist, setProductExist] = useState(searchProduct(product.id));

    let class_price = "";
    let total_price_discounted = 0;

    if (discount) {
        class_price = "discount_text_red";
        total_price_discounted = (price - (price / 100 * discount)).toFixed(2);
    }

    function handleAddCar (quantity) {
        addProduct(product, quantity);
        setProductExist(true);
    }

    return (detail === "true") ? 
    <div className="container_product">
                                    <h3>{name}</h3>
                                    <ImageProduct url={url} size="400"/>
                                    <h4 className={class_price}>{`${price} €`}</h4>
                                    {discount ? <h4>{`${total_price_discounted} €`}</h4> : ""}
                                    {productExist === true ? <Link className="link" to="/cart"><Button text="Go to cart"></Button></Link>
                                    :
                                    <ItemCount onClick={handleAddCar} initial_count={1}></ItemCount>}
                                    <h4>{description}</h4>
                                </div> 
    :
    <div className="container_product">
                            <h3>{name}</h3>
                            <ImageProduct url={url} size="300"/> 
                            <h4 className={class_price}>{`${price} €`}</h4>
                            {discount ? <h4>{`${total_price_discounted} €`}</h4> : ""}
                            <Link className="link" to={`/product/${id}`}><Button text="See more"></Button></Link>
    </div>;
}

export default CardProduct;
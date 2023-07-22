import ImageProduct from "../ImageProduct/ImageProduct";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./style.css";

//#DC0D0D red
//#1DAD22 green

function CardProduct (props) {

    const {id, name, description, price, detail, url} = props;

    const html_product = <div className="container_product">
                            <h3>{name}</h3>
                            <ImageProduct url={url} size="300"/>
                            <Link className="link" to={`/product/${id}`}><Button text={price}></Button></Link>
                         </div>;

    const html_product_detail = <div className="container_product">
                                    <h3>{name}</h3>
                                    <ImageProduct url={url} size="400"/>
                                    <h4 className="container_text">{`${price} €`}</h4>
                                    <h4>{description}</h4>
                                </div>;

    return (detail === "true") ? html_product_detail : html_product;
}

export default CardProduct;
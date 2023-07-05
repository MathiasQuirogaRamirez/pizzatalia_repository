import ImageProduct from "../ImageProduct/ImageProduct";
import Button from "../Button/Button";
import "./style.css";

//#DC0D0D red
//#1DAD22 green

function CardProduct (props) {

    const {title, description} = props;

    return (
        <div className="container_product">
            <h3>{title}</h3>
            <div className="container_img_text">
                <ImageProduct url="/assets/carbonara.png"/>
                <div class="centered">{description}</div>
            </div>
            <Button text="Desde 13€"></Button>
        </div>
    );
}

export default CardProduct;
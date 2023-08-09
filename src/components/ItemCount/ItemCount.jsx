import { useState } from "react";
import ImageProduct from "../ImageProduct/ImageProduct";
import Button from "../Button/Button";
import "./style.css";

function ItemCount (props) {

    const {initial_count, onClick, product} = props;
    const [count, setCount] = useState(initial_count);

    function moreItemCount () {
        setCount(count + 1);
        if(product)
            onClick(product, count + 1);
    }

    function lessItemCount () {
        if(count > 1)
            setCount(count - 1);
        if(product)
            onClick(product, count - 1);
    }

    return (
        <div>
            <div className="container_">
                <ImageProduct onClick={lessItemCount} url="/less.png" size="18"></ImageProduct>
                <h3>{count}</h3>
                <ImageProduct onClick={moreItemCount} url="/more.png" size="18"></ImageProduct>
            </div>
            {!product && <Button onClick={() => {onClick(count)}} text="Add to cart"></Button>}
        </div>
    )
}

export default ItemCount;
import { useState, useEffect } from "react";
import { getDataProduct } from "../../services/connection";
import { useParams } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";

function CardProductDeailContainer () {

const [product, setProduct] = useState({});
const { id } = useParams();

async function requestProduct () {
  const response = await getDataProduct(id);
  setProduct(response);
}

useEffect (() => {
  requestProduct();
}, []);

return (
    <div>
      <div className="container">
          <CardProduct detail="true" {...product}></CardProduct>
      </div>
    </div>
  );
}

export default CardProductDeailContainer;
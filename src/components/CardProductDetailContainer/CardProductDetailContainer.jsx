import { useState, useEffect } from "react";
import { getProductData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
import { ColorRing } from  "react-loader-spinner";

function CardProductDeailContainer () {

const [product, setProduct] = useState({});
const { id } = useParams();
const [loading, setLoading] = useState(true);

async function requestProduct () {
  setLoading(true);
  const response = await getProductData(id);
  setProduct(response);
  setLoading(false);
}

useEffect (() => {
  requestProduct();
}, [id]);

return (
    loading ?
    <div className="centered"> 
      <ColorRing 
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#DC0D0D', '#1DAD22', '#FFFFFF', '#DC0D0D', '#1DAD22']}
      />
    </div>
    :
      <div>
        <div className="container">
            <CardProduct detail="true" {...product}></CardProduct>
        </div>
      </div>
  );
}

export default CardProductDeailContainer;
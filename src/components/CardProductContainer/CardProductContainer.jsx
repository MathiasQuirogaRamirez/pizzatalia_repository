import { useState, useEffect } from "react";
import { getData, getCategoryData, exportProductsToFirebase, exportProductsForFirebaseBatch } from "../../services/firebase";
import TitleSection from "../TitleSection/TitleSection"
import CardProduct from "../CardProduct/CardProduct";
import "./style.css";
import { useParams } from "react-router-dom";
import { ColorRing } from  "react-loader-spinner";
import Button from "../Button/Button";

function CardProductContainer () {

let title = "FOOD";
const [products, setProducts] = useState([]);
const { id_category } = useParams(); 
const [loading, setLoading] = useState(true);

if (id_category)
  title = id_category.toUpperCase();

async function requestProducts () {
  setLoading(true);
  const response = id_category ? await getCategoryData(id_category) : await getData();
  setProducts(response);
  setLoading(false);
}

async function handleAddProductsToFirebase () {
  await exportProductsToFirebase();
}

async function handleAddProductsToFirebaseBatch () {
  await exportProductsForFirebaseBatch();
}

useEffect (() => {
  requestProducts();
}, [id_category]);

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
      <TitleSection title={title}></TitleSection>
      <div className="container">
        {products.map((item) => (
          <CardProduct detail="false" key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CardProductContainer;
import { useState, useEffect } from "react";
import getData from "../../services/connection";
import { getDataCategory } from "../../services/connection";
import TitleSection from "../TitleSection/TitleSection"
import CardProduct from "../CardProduct/CardProduct";
import "./style.css";
import { useParams } from "react-router-dom";

function CardProductContainer () {

let title = "FOOD";
const [products, setProducts] = useState([]);
const { id_category } = useParams();

if (id_category)
  title = id_category.toUpperCase();

async function requestProducts () {
  const response = id_category ? await getDataCategory(id_category) : await getData();
  setProducts(response);
}

useEffect (() => {
  requestProducts();
}, []);

return (
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
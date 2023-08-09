import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import { ColorRing } from  "react-loader-spinner";
import "./style.css";

function OrderConfirm () {

  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);
      setOrderData(order);
    });
  }, []);

  return (
    <div className="centered">
      <h1>Thank you for your purchase!</h1>
      {orderData !== null ?
      (<div>
          <h3 className="font_green">Ordered food:</h3>
          <p>
            {orderData.items.map((item) => {
              return (
                <h5 className="font_red">{item.name} - {item.quantity}</h5>
              );
            })}
          </p>
        </div>)
      :
      (<ColorRing 
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#DC0D0D', '#1DAD22', '#FFFFFF', '#DC0D0D', '#1DAD22']}
      />)
      }
    </div>
  );
}

export default OrderConfirm;
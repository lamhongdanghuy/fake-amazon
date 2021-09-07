import React from "react";
import "./checkoutitem.css";
import { useStateValue } from "./StateProvider";

function Checkoutitem({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removefromcart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutitem">
      <img src={image} alt="" className="checkoutitem-img" />
      <div className="checkoutitem-info">
        <p className="checkoutitem-title">{title}</p>
        <p className="checkoutitem-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutitem-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removefromcart}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default Checkoutitem;

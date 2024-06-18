import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "../Provider/StateProvider.jsx";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [add, setAdd] = useState("Add to basket");
  const [color, setColor] = useState("#f0c14b");
  // console.log("This is the basket >>>", basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setAdd("Product Added in the Cart");
    setColor("#06D001");
    setTimeout(() => {
      setAdd("Add to basket");
      setColor("#f0c14b");
    }, 1500);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="The Lean Startup book image " />

      <button style={{ backgroundColor: color }} onClick={addToBasket}>
        {add}
      </button>
    </div>
  );
}

export default Product;

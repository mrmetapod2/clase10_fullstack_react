import React from "react";
import "../MisComponentes.css";

function Producto({ name, price, discount, category }) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="producto-card">
      <h3>{name}</h3>
      <p>Categoría: {category}</p>
      {discount ? (
        <p>
          Precio: <span style={{ textDecoration: "line-through" }}>${price}</span> ${discountedPrice.toFixed(2)}
        </p>
      ) : (
        <p>Precio: ${price}</p>
      )}
    </div>
  );
}

export default Producto;

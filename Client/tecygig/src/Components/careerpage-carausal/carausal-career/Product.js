import React from "react";

export default function Product(props) {
  return (
    <div className="card-career">
      <img className="product--image-career" src={props.url} alt="product image" />
      <h4 className="p-1 m-2">{props.name}</h4>
      <p className="p-3 fs-6">{props.description}</p>
      {/* <p>
        <button>Add to Cart</button>
      </p> */}
    </div>
  );
}
import React from "react";

export default function Product(props) {
  return (
    <div className="card2">
      
      <div className="d-flex"> 
         <img className="product2--image" src={props.url} alt="product image" />
          <h4 >{props.name}</h4>
      </div>
      <div className="m-3">
      <p> - {props.name2}</p>
      <p> - {props.name3}</p>
      <p>- {props.name4}</p>
      <p> - {props.name5}</p>
      <p>- {props.name6}</p>
      </div>
      
      <p>
        <button varient='primary'>Read more</button>
      </p>
    </div>
  );
}
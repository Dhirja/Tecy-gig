import React from "react";

export default function Product(props) {
  return (
    <div className="card2">
      
      <div className="d-flex"> 
         <img className="product2--image" src={props.url} alt="product image" />
          <h4 >{props.name}</h4>
      </div>
      <div className="m-3">
      <p><img height={30} src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/android.svg" /> {props.name2}</p>
      <p><img height={30} src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/android.svg" /> {props.name3}</p>
      <p><img height={30} src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/android.svg" /> {props.name4}</p>
      <p><img height={30} src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/android.svg" /> {props.name5}</p>
      <p><img height={30} src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/android.svg" /> {props.name6}</p>
      </div>
      
      <p>
        <button varient='primary'>Read more</button>
      </p>
    </div>
  );
}
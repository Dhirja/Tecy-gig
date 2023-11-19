import "./Apps2.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData2, responsive } from "./data";

export default function App() {
  const product = productData2.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      name2={item.name2}
      name3={item.name3}
      name4={item.name4}
      name5={item.name5}
      name6={item.name6}
    />
  ));

  return (
    <div className="Apps2">
      <h1 className="mt-1 p-3" style={{ textAlign: "center", color: "black" }}>
        Services We Offer
      </h1>
      <Carousel
        showDots={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
      >
        {product}
      </Carousel>
    </div>
  );
}

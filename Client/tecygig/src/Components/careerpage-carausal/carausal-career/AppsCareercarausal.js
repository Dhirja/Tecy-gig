import "./AppsCareer.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function App() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      //   price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="Apps-career">
      <h1 className="mt-3 p-3" style={{ textAlign: "center", color: "black" }}>
        Perks To Work With Tecygig:
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

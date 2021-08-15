import React from "react";
import Gallery from "react-amazon-gallery";

let images = [
  "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81ky0potEEL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71b9icxgIgL._AC_SL1000_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/61QECaX%2BDqL._AC_SL1500_.jpg",
];

const ProductPage = () => {
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default ProductPage;

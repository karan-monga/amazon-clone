/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        /> */}

        <div className="home_row">
          <Product
            id="001"
            title="Apple AirPods Pro"
            price={189.99}
            image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="002"
            title="Hamilton Beach Dual Breakfast Sandwich Maker with Timer, Silver"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81ky0potEEL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="002"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black"
            price={249.99}
            image="https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="003"
            title="Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71b9icxgIgL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="004"
            title="Segway Ninebot MAX Electric Kick Scooter, Max Speed 18.6 MPH, Long-range Battery, Foldable and Portable"
            price={894.44}
            image="https://images-na.ssl-images-amazon.com/images/I/61QECaX%2BDqL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="005"
            title="New Apple Watch Series 6 (GPS, 40mm) - Silver Aluminum Case with White Sport Band"
            price={346.21}
            image="https://images-na.ssl-images-amazon.com/images/I/71enijH9gUL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="005"
            title="TCL 65-inch 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65R635, 2021 Model"
            price={1299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91CXxVtVkAL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="005"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            price={474.99}
            image="https://m.media-amazon.com/images/I/51odsYyURHL._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="006"
            title="Yamaha YHT-4950U 4K Ultra HD 5.1-Channel Home Theater System with Bluetooth"
            price={479.95}
            image="https://m.media-amazon.com/images/I/81lTw2G06pL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

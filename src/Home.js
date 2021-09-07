import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://m.media-amazon.com/images/I/71uaOTjFEvL._SX3000_.jpg"
          alt=""
          className="home-img"
        />

        <div className="home-row">
          <Product
            id="1"
            title="Blink mini"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41GZI7HASrL._AC_UL320_SR320,320_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="EUREKA ERGONOMIC 55 Inch Gaming Desk"
            price={194.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71JsnHmJnJS._AC_UL160_SR160,160_.jpg"
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id="3"
            title="MSI 32 Inch Full HD RGB LED Non-Glare Super Narrow Bezel 1ms HDR Ready 2560 x 1440 165Hz Refresh Rate Free Sync Height Adjustabl"
            price={388.88}
            image="https://images-na.ssl-images-amazon.com/images/I/51pDOUfOkTL._AC_UL160_SR160,160_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Logitech G305 K/DA LIGHTSPEED Wireless Gaming Mouse - Official League of Legends KDA Gaming Gear - HERO 12,000 DPI, 6 Program"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71TVaZublLL._AC_UL160_SR160,160_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="SkyTech Prism II Gaming Computer PC Desktop - AMD Ryzen 7 5800X 8-Core 3.8GHz, RTX 3080 Ti 12G GDDR6X, 1TB Gen4 NVMe SSD, 16G"
            price={3449.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91f3Hg6a5lS._AC_UL160_SR160,160_.jpg"
            rating={5}
          />
          <Product
            id="6"
            title="Logitech G PRO X Wireless Lightspeed Gaming Headset - Shroud Edition"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/610yRl5ecJS._AC_UL160_SR160,160_.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="7"
            title="Acer Predator M-Utility 1680D Ballistic Laptop Backpack for Up to 17 Inch Laptop, Black, PBG920"
            price={312.32}
            image="https://images-na.ssl-images-amazon.com/images/I/51aYMJaXNzL._AC_UL160_SR160,160_.jpg"
            rating={5}
          />
          <Product
            id="8"
            title="ASUS Wired Gaming Earbuds ROG Cetra | Noise Cancelling Earbuds with Large 10mm Drivers | Secure & Comfortable Ear Fit | Multi"
            price={95.21}
            image="https://images-na.ssl-images-amazon.com/images/I/71Mq6V5FW1L._AC_UL160_SR160,160_.jpg"
            rating={4}
          />
          <Product
            id="9"
            title="Hbada Reclining Office Desk Chair | Adjustable High Back Ergonomic Mesh Computer Recliner | Home Office Chairs with Footrest "
            price={179.89}
            image="https://images-na.ssl-images-amazon.com/images/I/61rYB6Fd-PL._AC_UL160_SR160,160_.jpg"
            rating={2}
          />
        </div>

        <div className="home-row">
          <Product
            id="10"
            title="Sceptre Curved 49 inch (5120x1440) Dual QHD 32:9 Gaming Monitor up to 120Hz DisplayPort HDMI Build-in Speakers, Gunmetal Black 2021 (C505B-QSN168) "
            price={997.82}
            image="https://m.media-amazon.com/images/I/61jZXu6Y1dL._AC_SX425_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

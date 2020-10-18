import React from "react";

import primeDay from "../../assets/prime-day-banner.png";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={primeDay} alt="Banner" />

        <div className="home__row">
          <Product
            id={Math.random()}
            title="Apple iPhone 11 Pro Max (256GB) - Silver"
            image="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg"
            rating={5}
            price={131900}
          />
          <Product
            id={Math.random()}
            title="Samsung Galaxy Note 10+ (Aura Glow, 12GB RAM, 256GB Storage)"
            image="https://images-na.ssl-images-amazon.com/images/I/71G1FCIP1EL._SL1500_.jpg"
            rating={3}
            price={84200}
          />
        </div>

        <div className="home__row">
          <Product
            id={Math.random()}
            title="Casio G-shock White Dial Smartwatch G-squad Series for Men with Heart Rate Monitor + Gps Fuction + Solar Powered - GBD-H1000-1A7DR (G1035)"
            image="https://images-na.ssl-images-amazon.com/images/I/61oCN53%2BNsL._UL1200_.jpg"
            rating={4}
            price={39995}
          />
          <Product
            id={Math.random()}
            title="Emporio Armani Analog Black Dial Mens Watch - AR60008"
            image="https://images-na.ssl-images-amazon.com/images/I/81917GAvZSL._UL1500_.jpg"
            rating={4}
            price={29995}
          />
          <Product
            id={Math.random()}
            title="Diesel Analog Black Dial (Big dial) Mens Watch-DZ7395"
            image="https://images-na.ssl-images-amazon.com/images/I/91sHbYZvz%2BL._UL1500_.jpg"
            rating={5}
            price={28295}
          />
        </div>

        <div className="home__row">
          <Product
            id={Math.random()}
            title="Nike Mens Zoom All Out Flyknit Running Shoes"
            image="https://images-na.ssl-images-amazon.com/images/I/61ZTzOJOXFL._UL1012_.jpg"
            rating={5}
            price={10577}
          />
          <Product
            id={Math.random()}
            title="Adidas Mens Ultraboost S.RDY FTWWHT/CBLACK/SIGPNK Running Shoe (FW9771)"
            image="https://images-na.ssl-images-amazon.com/images/I/71-AAfWC4yL._UL1500_.jpg"
            rating={3}
            price={18990}
          />
          <Product
            id={Math.random()}
            title="Puma BMW M Motorsport RS-Cube Shoes"
            image="https://images-na.ssl-images-amazon.com/images/I/81quPWso1%2BL._UL1500_.jpg"
            rating={4}
            price={9999}
          />
          <Product
            id={Math.random()}
            title="Reebok Womens Zig Kinetica Running Shoes"
            image="https://images-na.ssl-images-amazon.com/images/I/71wfXwZVz1L._UL1500_.jpg"
            rating={4}
            price={7199}
          />
        </div>

        <div className="home__row">
          <Product
            id={Math.random()}
            title='ASUS ZenBook Pro Duo UX581 Intel Core i7 9th Gen 15.6" 4K UHD OLED Touchscreen Laptop (32GB RAM/1TB NVMe SSD/Windows 10/GeForce RTX 2060 Graphics/ScreenPad Plus/Celestial Blue/2.5 Kg), UX581GV-H7201T'
            image="https://images-na.ssl-images-amazon.com/images/I/91VR2ZXL9LL._SL1500_.jpg"
            rating={5}
            price={227630}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

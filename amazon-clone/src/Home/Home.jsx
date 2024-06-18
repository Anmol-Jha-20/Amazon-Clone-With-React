import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import OuterSlider from "./OuterSlider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <OuterSlider />
        <div className="home_row">
          <Product
            id="12345678"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Product
            id="91011121"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="18192021"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            }
            rating={3}
          />
          <Product
            id="22232425"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image={
              "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            }
            rating={5}
          />
          <Product
            id="26272829"
            title="New Apple ipad Pro (12.9-inch, Wi-Fi,128GB) - Silver (4th Generation)"
            price={598.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="14151617"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

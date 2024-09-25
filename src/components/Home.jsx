import axios from "axios";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products]=useContext(productContext);
  // console.log(products);
  return products? (
    <>
      <Nav />
      <div className="w-[85%] h-screen flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((item, index) => {
          return (
            < Link to={`/details/${item.id}`} key={index} className="card w-[16%] h-[35vh]  rounded m-12">
              <div
                className="w-full h-[80%] bg-contain bg-no-repeat ml-[9%] hover:scale-105"
                style={{
                  backgroundImage:
                    `url(${item.image})`,
                }}
              ></div>
              <h2 className="text-center mt-2">
                {item.title}
              </h2>
            </Link>
          );
        })}
      </div >
    </>
  ):(<Loading/>)
};

export default Home;

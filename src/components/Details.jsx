import { useContext, useEffect, useState } from "react";
import { productContext } from "../utils/Context";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
    const [product, setProduct]=useState(null);
    const {id}=useParams();
    const getSingleProduct=async ()=>{
        try {
            const {data}=await axios.get(`/products/${id}`);
            // console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getSingleProduct();
    },[]);
  return (product?
    <div className="h-[80%] w-[80%] flex  m-auto">
      <img className="object-cover h-[80%]  "
        src={`${product.image}`}
        alt=""
      />
      <div className="ml-20 m-10">
        <h2 className="text-2xl mb-4">{product.title}</h2>
        <h4 className="mb-4 opacity-70 text-red-400 font-semibold"> INR {product.price}</h4>
        <h3 className="mb-4  text-xl">men's clothing</h3>
        <p>
        {product.description}
        </p>
        <button className=" px-6 py-2 rounded mt-6 border border-green-400 px-5 py-2 text-green-500 mr-10">Edit</button>
        <button className=" px-6 py-2 rounded mt-6 border border-red-400 px-5 py-2 text-red-500 ">Delete</button>
      </div>
    </div>:<Loading/>
  );
};

export default Details;


import axios from "./axios"
import { createContext, useEffect, useState } from "react"

export const productContext=createContext()

const Context=(props)=>{
    const [products, Setproducts]=useState(null)

  const getProduct= async ()=>{
    try {
        const {data}=await axios("/products");
        // console.log(data);
        Setproducts(data);
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
    return (
      <productContext.Provider value={[products, Setproducts]}>
        {props.children}
      </productContext.Provider>
    )
}

export default Context
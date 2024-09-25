import { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav=()=>{
    const [products]=useContext(productContext);

    let unique_product=
       products && products.reduce((acc, cv)=>[...acc, cv.category],[])
    // console.log(unique_product)

    unique_product=[... new Set(unique_product)];
    // console.log(unique_product)

    const color=()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()}, 0.6)`
    }
    console.log(color());
    
    return (
        <nav className="w-[15%] h-full bg-slate-200 flex flex-col items-center gap-4">
            <a href="/create" className=" px-4 py-2 rounded mt-6 border border-blue-400 px-5 py-2 text-blue-500 " >Add New Product</a>
            <hr />
            <h1 className="text-2xl">Category Filter</h1>
            <div className="flex flex-col gap-2 w-full">
                {unique_product.map((cat, ind)=>{
                    return <Link to={`/?category=${cat}`} key={ind} className=" mt text-start uppercase"><span style={{backgroundColor:color()}} className="h-4 w-4 rounded-full mx-2 mt-1 inline-block"></span>{cat}</Link>
                })}
            </div>
      </nav>
    )
}
export default Nav;
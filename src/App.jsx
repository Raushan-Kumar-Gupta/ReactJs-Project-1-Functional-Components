import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App(){
  return (
    <div className="w-full h-screen flex">
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
     </Routes>
    </div>
  )
}
export default App;
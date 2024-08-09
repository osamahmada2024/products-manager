import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import "../css/Home.css"

function Home() {
  return (
    <>
      <Sidebar />
      <h1 className="mb-5 orangered">Hello let's manage your products </h1>
      <h3 className="d-inline">Go To Your Products Now</h3>
      <Link to="/products"  className=" ms-4 px-3 py-3 start ">My Products </Link>
    </>
  );
}

export default Home;

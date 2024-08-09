import React, { useState } from "react";
import "../css/Change.css";
import { useNavigate } from "react-router";
import GetImageBase64 from "./GetImageBase64";

function Add() {
  var title, price, image, description, category;
  var newProduct = {};
  const Navigate = useNavigate();
  const handleChange = async (e) => {
    if (e.target.id === "title") title = e.target.value;
    else if (e.target.id === "price") price = e.target.value;
    else if (e.target.id === "description") description = e.target.value;
    else if (e.target.id === "category") category = e.target.value;
    else image = await GetImageBase64(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newProduct = { title, price, image, description, category };

    async function fetchData() {
      const json = await fetch("https://fakestoreapi.in/api/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      await json.json();
    }
    fetchData();
    setTimeout(() => {
      Navigate("/products");
    }, 2000);
  };

  return (
    <div className="form-div py-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">product title: </label>
        <input
          onChange={handleChange}
          id="title"
          type="text"
          placeholder="title"
        />
        <label htmlFor="price">product price:$</label>
        <input onChange={handleChange} id="price" type="number" />
        <label htmlFor="category">product category: </label>
        <input
          onChange={handleChange}
          id="category"
          type="text"
          placeholder=""
        />
        <label htmlFor="image">product Image: </label>
        <input
          onChange={handleChange}
          id="image"
          type="file"
          placeholder=""
        />{" "}
        <label htmlFor="description">product description: </label>
        <textarea
          onChange={handleChange}
          id="description"
          type="text"
          placeholder="desc......"
        />
        <button id="orangered" className="mt-5  orangered  w-25 btn ">
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;

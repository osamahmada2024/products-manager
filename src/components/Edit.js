import React, {  useEffect, useState } from "react";
import "../css/Change.css";
import { useNavigate, useParams } from "react-router";
import GetImageBase64 from "./GetImageBase64";
function Edit() {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  const Fetch = async () => {
    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const json = await res.json();
    setProducts(json.product);
  };
  useEffect(() => {
    Fetch();
  },[]);
  const Navigate = useNavigate();
  const handleChange = async (e) => {
    const { value, id } = e.target;
    setProducts((prev) => ({ ...prev, [id]: value }));
    if (e.target.id === "image") {
      const ImageBase64 = await GetImageBase64(e.target.files[0]);
      setProducts((prev) => ({ ...prev, image: ImageBase64 }));
    } else {
      setProducts((prev) => ({ ...prev, [id]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    async function fetchData() {
      const json = await fetch(`https://fakestoreapi.in/api/products/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(products),
      });
      const data = await json.json();
      setProducts(data);
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
          value={products.title || ""}
        />
        <label htmlFor="price">product price:$</label>
        <input
          onChange={handleChange}
          id="price"
          type="number"
          value={products.price || ""}
        />
        <label htmlFor="category">product category: </label>
        <input
          onChange={handleChange}
          id="category"
          type="text"
          placeholder=""
          value={products.category || ""}
        />
        <label htmlFor="image">product Image: </label>
        <input onChange={handleChange} id="image" type="file" placeholder="" />
        <label htmlFor="description">product description: </label>
        <textarea
          onChange={handleChange}
          id="description"
          type="text"
          placeholder="desc......"
          value={products.description || ""}
        />
        <button id="orangered" className="mt-5  orangered  w-25 btn ">
          Edit
        </button>
      </form>
    </div>
  );
}

export default Edit;

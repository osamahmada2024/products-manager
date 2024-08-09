import React, { useEffect, useState } from "react";

function Categories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);

  const Fetch = async () => {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products/category");
      if (!res.ok) {
        throw new Error(`Http error status:${res.status}`);
      }
      const json = await res.json();
      setProducts(json.categories);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    Fetch();
  },[loading]);
  return (
    <div>
      <h3 className="orangered ms-3 my-5">products Categories</h3>
      {products.map((product, index) => (
        <h5
          key={index}
          style={{
            color: "#fff",
            background: "orangered",
            display: "inline-block",
          }}
          className="p-2 mx-3 my-5"
        >
          {product}
        </h5>
      ))}
      {loading ? (
        <div className="text-center mt-3">
          <div
            style={{ color: "orangered" }}
            className=" spinner-border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Categories;

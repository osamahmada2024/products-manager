import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/ProductsDesc.css";
function ProductsDesc() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const Fetch = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
      if (!res.ok) {
        throw new Error(`Http error status:${res.status}`);
      }
      const json = await res.json();
      setProducts(json.product);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    Fetch();
  },[]);
  return (
    <div className="card mb-3">
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
      <img
        src={products.image}
        id="image-settings"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <p className="card-text">
          <small className="text-muted">
            <mark>{products.price}$</mark>
          </small>
        </p>
      </div>
    </div>
  );
}

export default ProductsDesc;

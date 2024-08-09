import React, { createContext, useEffect, useState } from "react";
import Product from "./Product";
import "../css/Products.css";
import { useNavigate } from "react-router";
export const context = createContext();
function Products() {
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const Fetch = async () => {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products");
      if (!res.ok) {
        throw new Error(`Http error status:${res.status}`);
      }
      const json = await res.json();
      setProducts(json.products);
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
    <div>
      <h1 className="orangered">Products page</h1>
      <button
        onClick={() => Navigate("/adding")}
        id="orangered"
        className=" w-50 ms-5 my-5  btn "
      >
        add
      </button>
      <table className="products-table  table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>info</th>
            <th>more</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <context.Provider value={Fetch}>
                <Product product={product} />
              </context.Provider>
            </tr>
          ))}
          {loading ? (
            <tr>
              <td></td>
              <td>
                <div className="text-center mt-3">
                  <div
                    style={{ color: "orangered" }}
                    className=" spinner-border"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
              <td></td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Products;

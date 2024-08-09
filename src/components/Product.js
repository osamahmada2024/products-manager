import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { context } from "./Products";
function Product(props) {
  const Fetch = useContext(context);
  const navigate = useNavigate();
  const { product } = props;
  const VIEW = () => {
    navigate(`/products/${product.id}`);
  };
  const go_to_Edit = (id) => {
    navigate(`/Edit/${id}`);
  };

  const Delete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const FetchData = async () => {
          const res = await fetch(
            `http://localhost:3000/products/${id}`,
            {
              method: "DELETE",
            }
          );
          await res.json();
          Fetch();
        };
        FetchData();
      }
    });
  };

  return (
    <>
      <td>{product.id}</td>
      <td>
        {product.title?product.title.length > 16 ? product.title.slice(0, 15) : product.title:""}
        ..
      </td>
      <td>
        {product.description?product.description.length > 31
          ? product.description.slice(0, 50)
          : product.description:""}
        ....
      </td>
      <td>
        <button onClick={VIEW} className="ms-2 btn btn-primary">
          view
        </button>
        <button
          onClick={() => go_to_Edit(product.id)}
          className="ms-2 btn btn-secondary"
        >
          Edit
        </button>
        <button
          onClick={() => Delete(product.id)}
          className="ms-2   btn btn-danger"
        >
          Delete
        </button>
      </td>
    </>
  );
}
export default Product;

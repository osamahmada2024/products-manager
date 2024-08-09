import React from "react";
import "../css/Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="sidebar col-2 bg-light">
        <Link className="orangered" id="sidebar-links" to="/products">Get all products</Link><br/>
        <Link className="orangered" id="sidebar-links" to="/categories">Get all Categories</Link>
      </div>
    </div>
  );
}

export default Sidebar;

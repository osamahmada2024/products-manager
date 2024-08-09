import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {  Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import ProductsDesc from "./components/ProductsDesc";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Categories from "./components/Categories";
function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/adding" element={<Add />} />
          <Route path="/products/:id" element={<ProductsDesc />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      
    </div>
  );
}

export default App;

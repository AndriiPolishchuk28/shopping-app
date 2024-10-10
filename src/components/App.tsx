import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import Layout from "./Layout/Layout";
import Cart from "../pages/Cart/Cart";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;

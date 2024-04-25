import Header from "./components/Header";
import React from "react";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FullPizza from "./pages/FullPizza";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/Tasty-Food" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

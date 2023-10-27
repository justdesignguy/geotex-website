import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Future from "./Future/Future";
import Home from "./Home/Home";
import Principals from "./Principals/Principals";
import Product from "./Product/Product";

const Root = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Principals />
      <Product />
      <Future />
    </div>
  );
};

export default Root;

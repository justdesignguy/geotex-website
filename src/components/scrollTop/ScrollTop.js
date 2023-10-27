import React, { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import "./ScrollTop.css";

const ScrollTop = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("topButton").style.visibility = "visible";
      } else {
        document.getElementById("topButton").style.visibility = "hidden";
      }
    };
  
    window.onscroll = function () {
      scrollFunction();
    };
    window.onload = function () {
      scrollFunction();
    };
  }, [])

  return (
    <button onClick={scrollToTop} id="topButton" title="Go to top">
      {/* <i className="fas fa-hand-point-up" aria-hidden="true"></i> */}
      <BsArrowUp/>
    </button>
  );
};

export default ScrollTop;


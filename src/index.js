import React from "react";
import ReactDom from "react-dom";
import Heading from "./Components/Heading";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const img = "http://picsum.photos/200";

ReactDom.render(
  <div>
    <NavBar />
    <Heading />
    <p>Another paragraph</p>
    <img src={img + "?grayscale"} alt="random-image" />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <Footer />
  </div>,
  document.getElementById("root")
);

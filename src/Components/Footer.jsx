//Everytime we have a new React Component
import React from "react";

function Footer() {
  const style = { color: "lightgrey", fontSize: "12px" };
  const currentYear = new Date().getFullYear();
  return <footer>Made with ♥ love © {currentYear} </footer>;
}

export default Footer;

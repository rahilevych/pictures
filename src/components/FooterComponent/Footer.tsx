import React from "react";
import "./Footers.scss";

type FooterProps = {};
// REVIEW remove props a props declaration if not used.
const Footer = (props: FooterProps) => {
  return (
    <div className="footer">
      Footer
      <a href="https://www.vecteezy.com/free-png/404">404 PNGs by Vecteezy</a>
    </div>
  );
};

export default Footer;

import React from "react";
import "../css/footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Team-081-GroupA</p>
    </footer>
  );
}

export default Footer;

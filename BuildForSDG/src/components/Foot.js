import React from "react";
import "../css/footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer-background'>
        <footer>
        <p> Copyright ⓒ {year} Team-081-GroupA</p>
        </footer>


    </div>
  );
}

export default Footer;

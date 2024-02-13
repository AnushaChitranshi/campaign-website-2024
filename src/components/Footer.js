import React from "react";
import Instagram from "../images/instagram.svg";
import BeReal from "../images/bereal.svg";
import TikTok from "../images/tiktok.svg";

const Footer = ({ openMenu }) => {
  return (
    <footer className={`footer ${openMenu ? "hidden" : ""}`}>
      <p>Connect with us</p>
      <div className="footer--socials">
        <a href="https://www.instagram.com/saxenaperez/">
          <img className="footer--icon" src={Instagram} alt="Instagram logo" />
        </a>
        <a href="https://www.instagram.com">
          <img className="footer--icon" src={BeReal} alt="BeReal logo" />
        </a>
        <a href="https://www.tiktok.com">
          <img className="footer--icon" src={TikTok} alt="TikTok logo" />
        </a> 
      </div>
      <p>
        <a href="https://github.com/nishilfaldu/campaign-website-2024">Project Home</a>
      </p>
    </footer>
  );
};

export default Footer;

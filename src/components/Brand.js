import React from "react";
import { NavLink } from "react-router-dom";
import circleLogo from "../images/logo_button.png";

const Brand = ({ openMenu }) => {
  return (
    <div className={`brand ${openMenu ? "nav-open" : ""}`}>
      <NavLink
        to="/home"
        className={(e) =>
          e.isActive ? "navigation--item active" : "navigation--item"
        }
      >
        <div className="brand img-container">
          <img className="brand img" src={circleLogo} alt="Branding Logo" />
        </div>
      </NavLink>
      <span>
        <p className="brand--slogan">tomorrow's looking great with</p>
        <h1 className="brand--names">Saxena & Perez</h1>
      </span>
    </div>
  );
};

export default Brand;

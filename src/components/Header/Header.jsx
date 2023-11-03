import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import menu from "../../assets/menu.png";
// import { faL } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="nav-list">
            <ul className="nav-item">
              <li>
                <NavLink to="/">About-Course</NavLink>
              </li>
              <li>
                <NavLink to="/iit">Why IIT-Academy?</NavLink>
              </li>
              <li>
                <NavLink to="/fee">Fee & Scholarship</NavLink>
              </li>
              <li>
                <NavLink to="/coursebenefits">Course-Benefits</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;

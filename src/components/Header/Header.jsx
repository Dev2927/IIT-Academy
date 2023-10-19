import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="nav-list">
            <ul className="nav-item">
              <li>
                <NavLink to="/">
                  About-Course
                </NavLink>
              </li>
              <li>
                <NavLink to="/fee">
                  Fee & Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink to="/coursebenefits">
                  Course-Benefits
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
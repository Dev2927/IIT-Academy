import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import menu from "../../assets/menu.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="nav-list">
            <ul className="nav-item">
              <li className="desktopMenuListItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="desktopMenuListItem">
                <NavLink to="/about">About-Course</NavLink>
              </li>
              <li className="desktopMenuListItem">
                <NavLink to="/resources">Resources</NavLink>
              </li>
              <li className="desktopMenuListItem">
                <NavLink to="/iit">Why IIT-Academy?</NavLink>
              </li>
              <li className="desktopMenuListItem">
                <NavLink to="/fee">Fee & Scholarship</NavLink>
              </li>
              <li className="desktopMenuListItem">
                <NavLink to="/coursebenefits">Course-Benefits</NavLink>
              </li>
              <li className="desktopMenuListItem">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}

          <img
            src={menu}
            alt="Menu"
            className="mobMenu"
            onClick={() => setShowMenu(!showMenu)}
          />
          <div
            className="navMenu"
            style={{ display: showMenu ? "flex" : "none" }}
          >
            <ul className="nav-item">
              <li>
                <NavLink to="/" className="listItem">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="listItem">
                  About-Course
                </NavLink>
              </li>
              <li>
                <NavLink to="/iit" className="listItem">
                  Why IIT-Academy?
                </NavLink>
              </li>
              <li>
                <NavLink to="/fee" className="listItem">
                  Fee & Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink to="/coursebenefits" className="listItem">
                  Course-Benefits
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="listItem">
                  Contact Us
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

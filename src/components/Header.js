import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container_logo" name="logo-home">
        <NavLink to="/employees" className="nav_link">
          <img
            src="https://www.teaminternational.com/wp-content/uploads/2019/05/new-web-logo-team-international.png"
            alt=""
          />
        </NavLink>
      </div>
      <ul className="nav_list">
        <li className="nav_list-item">
          <NavLink
            to="/employees"
            className="nav_link"
            activeClassName="active"
          >
            EMPLOYEES
          </NavLink>
        </li>
        <li className="nav_list-item">
          <NavLink to="/prizes" className="nav_link" activeClassName="active">
            PRIZES
          </NavLink>
        </li>
        <li className="nav_list-item">
          <NavLink
            to="/achievements"
            className="nav_link"
            activeClassName="active"
          >
            ACHIEVEMENTS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

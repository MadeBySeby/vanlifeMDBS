import React from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const isLogged = localStorage.getItem("loggedIn");
  console.log(isLogged);
  function fakeLogOut() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
    alert("You have been logged out");
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #Vanlife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host">
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about">
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans">
          Vans
        </NavLink>
        {/* <NavLink
          style={({ isActive }) => (isActive ? activeStyle : "")}></NavLink> */}
        <Link
          to="login"
          className="login-link"
          onClick={isLogged ? fakeLogOut : () => {}}>
          {isLogged ? "Sign out" : "Sign in"}
        </Link>
      </nav>
    </header>
  );
}

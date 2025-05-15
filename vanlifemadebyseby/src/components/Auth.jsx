import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
export default function Auth() {
  const isLogged = localStorage.getItem("loggedIn");
  const location = useLocation();
  if (!isLogged) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must login first", from: location.pathname }}
      />
    );
  }
  return <Outlet />;
}

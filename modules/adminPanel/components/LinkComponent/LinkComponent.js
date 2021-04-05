import React from "react";
import { Link } from "react-router-dom";
import "./LinkComponent.css";

export default function LinkComponent({ name, path }) {
  return (
    <Link to={path} className="linkComponent">
      {name}
    </Link>
  );
}

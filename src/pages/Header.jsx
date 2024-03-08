import React from "react";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Movie
      </a>
      <ul className="nav">
        {navListData.map((nav) => {
          return <NavListItem key={nav._id} nav={nav} />
          
        })}
        
      </ul>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Ai<span>Nabi</span> 🤖</div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/">Башкы бет</Link>
          <Link to="/about">Биз жөнүндө</Link>
          <Link to="/courses">Мугалимдер</Link>
          <Link to="/profile">Профиль</Link>
          <Link to="/contact">Байланыш</Link>
          <Link to="/signup">Катталуу</Link>
        </nav>
        <div className="auth-buttons">
          <DarkModeToggle />
          <Link to="/signup" className="btn green">Катталуу</Link>
          <Link to="/login" className="btn">Кирүү</Link>
        </div>
        <div
          className="burger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
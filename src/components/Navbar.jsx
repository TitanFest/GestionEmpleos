import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="logo">VALLEJOB</div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar empleos..." />
        <button className="search-btn">Buscar</button>
      </div>
      <div className="nav-buttons">
      <button className="menu-btn">☰</button>
        <button className="register-btn">REGÍSTRAR</button>
        <button className="login-btn">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;


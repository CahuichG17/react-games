import React, { useState } from 'react';
import '../assets/css/navbar-component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        JUEGATELA
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Consolas</a></li>
          <li><a href="#">Videojuegos</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Ofertas</a></li>
          <li>
            <button className="search-button" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isSearchOpen && (
        <div className="search-container">
          <input type="text" placeholder="Buscar..." />
        </div>
      )}
    </nav>
  );  
}

export default Navbar;

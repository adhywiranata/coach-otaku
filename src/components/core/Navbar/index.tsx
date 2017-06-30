import * as React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = ({ isNavbarActive, toggleNavbar }: { isNavbarActive: boolean; toggleNavbar: any; }) => (
  <div className="navbar" style={{ left: isNavbarActive ? 0 : '-81vw' }}>
    <button onClick={toggleNavbar} className="btn-close">
      <img src={require('./close.png')} width="30px" />
    </button>
    <header className="navbar-header">
      <span>MENU</span>
    </header>
    <section className="navbar-content">
      <Link to="/" className="navbar-item-link">
        <div className="navbar-item">
          Home
        </div>
      </Link>
      <Link to="/about" className="navbar-item-link">
        <div className="navbar-item">
          About
        </div>
      </Link>
      <Link to="/my" className="navbar-item-link">
        <div className="navbar-item">
          My Animes
        </div>
      </Link>
    </section>
    <section className="navbar-signature">
      <span>CouchOtaku, your best place to be an otaku</span>
    </section>
  </div>
);

export default Navbar;

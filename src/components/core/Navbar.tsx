import * as React from 'react';

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
    </section>
  </div>
);

export default Navbar;

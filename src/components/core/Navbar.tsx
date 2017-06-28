import * as React from 'react';

import './navbar.css';

const Navbar = ({ isNavbarActive, toggleNavbar }: { isNavbarActive: boolean; toggleNavbar: any; }) => (
  <div className="navbar" style={{ left: isNavbarActive ? 0 : '-81vw' }}>
    wowowoowow
    <button onClick={toggleNavbar}>X</button>
  </div>
);

export default Navbar;

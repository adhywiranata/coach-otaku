import * as React from 'react';

import './navbar.css';

export default ({ isNavbarActive, toggleNavbar }: { isNavbarActive: boolean; toggleNavbar: any; }) => (
  <div
    className="overlay"
    onClick={toggleNavbar}
    style={{ display: isNavbarActive ? 'block' : 'none' }}
  />
);

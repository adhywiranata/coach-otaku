import * as React from 'react';
import { Link } from 'react-router-dom';

const menuButton = require('./menu.png');
const searchButton = require('./search.png');

export default ({ toggleNavbar, toggleSearch }: { toggleNavbar: any; toggleSearch: any; }) => (
  <div className="app-header">
    <img src={menuButton} width="25px" height="25px" onClick={toggleNavbar} />
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 className="app-logo">
        <span className="first">Couch</span>
        <span className="second">Otaku</span>
      </h1>
    </Link>
    <img src={searchButton} width="25px" height="25px" onClick={toggleSearch} />
  </div>
);

import * as React from 'react';

const menuButton = require('./menu.png');
const searchButton = require('./search.png');

export default () => (
  <div className="app-header">
    <img src={menuButton} width="25px" height="25px" />
    <h1 className="app-logo">
      <span className="first">Couch</span>
      <span className="second">Otaku</span>
    </h1>
    <img src={searchButton} width="25px" height="25px" />
  </div>
);
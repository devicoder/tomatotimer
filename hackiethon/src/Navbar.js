import React from 'react';
import './Navbar.css';
import Settings from './Settings';
import Coins from './Coins';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Settings />
        <Coins />
      </div>
    </div>
  );
}

export default Navbar;

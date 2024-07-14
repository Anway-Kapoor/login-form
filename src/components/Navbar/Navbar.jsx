import React from 'react';
import './Navbar.css';
import Tracks from '../Tracks/Tracks';

const tackspage = () => {

}

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#rules">Rules</a></li>
        <li><a href="#register">Register</a></li>
        <li><a onClick={tackspage} href="#register">Tracks</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

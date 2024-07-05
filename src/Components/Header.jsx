
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses Offered</Link>
        <Link to="/events">Events</Link>
      </nav>
    </header>
  );
};

export default Header;

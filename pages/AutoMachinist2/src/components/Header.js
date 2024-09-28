import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">AutoMachinist</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="aitools">AI Tools</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
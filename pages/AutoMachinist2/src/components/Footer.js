import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>AutoMachinist</h3>
          <p>Revolutionizing manufacturing through advanced technology and expertise.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ai-tools">AI Tools</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 AutoMachinist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
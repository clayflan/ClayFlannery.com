import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';

const LogIn = () => {
  return (
    <><div className="login">
      <h1>Log In</h1>
      <form>
        <div>
          <section id="services" className="services">
            <h2>Our Expertise</h2>
            <div className="service-grid">
              <div className="service-item">
                <i className="fas fa-cogs"></i>
                <h3>Precision Machining</h3>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Log In</button>
            </div>
          </section>
          </div>
      </form><p>Don't have an account? <Link to="/signup">Sign Up</Link></p><p><Link to="/">Forgot Password?</Link></p></>
    </>
  );
};

export default LogIn;
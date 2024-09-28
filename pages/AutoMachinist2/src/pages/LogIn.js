import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const LogIn = () => {
  return (
    <div className="login">
      <h1>Log In</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      <p><Link to="/">Forgot Password?</Link></p>
    </div>
  );
};

export default LogIn;
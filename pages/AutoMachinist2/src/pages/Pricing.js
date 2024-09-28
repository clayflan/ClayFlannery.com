import React from 'react';
import './styles/App.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <div className="pricing-plans">
        <div className="plan">
          <h2>Basic</h2>
          <p className="price">$99/month</p>
          <ul>
            <li>Access to basic AI tools</li>
            <li>5 GB cloud storage</li>
            <li>Email support</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p className="price">$199/month</p>
          <ul>
            <li>Access to all AI tools</li>
            <li>20 GB cloud storage</li>
            <li>Priority email and phone support</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p className="price">Custom</p>
          <ul>
            <li>Custom AI solutions</li>
            <li>Unlimited cloud storage</li>
            <li>24/7 dedicated support</li>
          </ul>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
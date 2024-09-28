import React from 'react';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/ThreeSceneSetUp';
import '../styles/App.css';

const HomePage = () => {
  return (
    <main>
      <section id="home" className="hero">

      console.log('HomePage component rendered');
      return <h1>Welcome to the Home Page!</h1>;

        <h1>Revolutionizing Manufacturing</h1>
        <p>Advanced 3D design, precision machining, and cutting-edge printing solutions</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </section>

      <section id="services" className="services">
        <h2>Our Expertise</h2>
        <div className="service-grid">
          <div className="service-item">
            <i className="fas fa-cogs"></i>
            <h3>Precision Machining</h3>
            <p>State-of-the-art CNC machining for complex parts</p>
          </div>
          <div className="service-item">
            <i className="fas fa-print"></i>
            <h3>Advanced 3D Printing</h3>
            <p>Multi-material additive manufacturing solutions</p>
          </div>
          <div className="service-item">
            <i className="fas fa-drafting-compass"></i>
            <h3>3D Design Services</h3>
            <p>Expert CAD modeling and design optimization</p>
          </div>
          <div className="service-item">
            <i className="fas fa-microchip"></i>
            <h3>Smart Manufacturing</h3>
            <p>IoT-enabled production for maximum efficiency</p>
          </div>
        </div>
      </section>

      <section id="technology" className="technology">
        <h2>Our Technology</h2>
        <div className="tech-showcase">
          <div className="tech-item">
            <h3>3D Model Evaluation</h3>
            <p>Upload your 3D model for instant analysis and optimization suggestions.</p>
            <div id="file-upload-container">
              <form id="file-form">
                <input type="file" id="file-upload" accept=".stl,.step" />
                <label htmlFor="file-upload" className="file-upload-label">Choose File</label>
                <button type="submit">Analyze</button>
              </form>
            </div>
          </div>
          <div className="tech-item">
            <h3>Real-time Visualization</h3>
            <ThreeScene />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About AutoMachinist</h2>
        <p>AutoMachinist is at the forefront of advanced manufacturing technology. Our team of expert engineers and designers are committed to pushing the boundaries of what's possible in material manufacturing.</p>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Clients Worldwide</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;
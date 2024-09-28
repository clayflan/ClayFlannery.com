import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import AITools from '../pages/AITools';
import Pricing from '../pages/Pricing';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import './styles/App.css';
<script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>

function App() {
  return (
    <Router basename='{process.env.PUBLIC_URL}'>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AITools" element={<AITools />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


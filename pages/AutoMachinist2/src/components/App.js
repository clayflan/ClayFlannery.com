import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';  // Correct imports
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import AITools from '../pages/AITools';
import Pricing from '../pages/Pricing';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import '../styles/App.css';

function App() {
  const navigate = useNavigate(); // Use navigate properly
  const location = useLocation();

  useEffect(() => {
    // Handle popstate event to manage back button navigation
    const handlePopState = () => {
      console.log('User navigated using back button');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <Router basename="/pages/automachinist2/public">  {/* Removed the basename for now */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Root route within /automachinist */}
          <Route path="/AITools" element={<AITools />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<HomePage />} />  {/* Fallback route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

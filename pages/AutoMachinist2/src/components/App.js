import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import AITools from '../pages/AITools';
import Pricing from '../pages/Pricing';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import '../styles/App.css';

function App() {

  const history = useNavigate(); // Import useNavigate from react-router-dom
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

  // Optionally, you can save and restore state here if needed
  useEffect(() => {
    const storedFormState = localStorage.getItem('formState');
    if (storedFormState) {
      setFormValues(JSON.parse(storedFormState)); // Assuming you have a way to set form values
    }
  }, []);

  return (
    <Router basename='{process.env.PUBLIC_URL}'>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
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


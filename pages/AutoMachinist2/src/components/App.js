import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import AITools from '../pages/AITools';
import Pricing from '../pages/Pricing';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/AutoMachinist" element={<HomePage />} />
          <Route path="/AITools" element={<AITools />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
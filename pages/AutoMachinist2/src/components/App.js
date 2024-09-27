import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/ai-tools" component={AITools} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ThreeSceneSetUp from './ThreeSceneSetUp';
import ModelAnalysis from './ModelAnalysis'; 

function App() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/3dscene" component={ThreeSceneSetUp} /> // Use this for scene setup
          <Route path="/modelanalysis" component={ModelAnalysis} /> // Use this for analysis
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </Router>
    );
  }
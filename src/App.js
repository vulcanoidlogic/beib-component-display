import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TextFieldPage from './pages/TextFieldPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <ul className="nav-links">
            <li><h4>Components</h4></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/text-field">TextField</Link></li>
          </ul>
          <div className="content-pane">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/text-field" component={TextFieldPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

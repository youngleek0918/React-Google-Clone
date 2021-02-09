import React from "react";
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/search">
            <h1>search page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import SingleCountry from "./pages/SingleCountry";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SingleCountry" exact component={SingleCountry} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import "./App.css";
import ComicsContainer from "./components/ComicsContainer";
import ComicDetails from "./components/ComicDetails";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>ComicBook</h1>
      <Switch>
        <Route path="/details">
          <ComicDetails />
        </Route>
        <Route path="/">
          <ComicsContainer />
        </Route>
      </Switch>
     
    </Router>
    );
}

export default App;

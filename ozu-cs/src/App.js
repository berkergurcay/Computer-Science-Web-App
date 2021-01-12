import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header/>
        <NavBar/>
      </Route>


      <Route path="/news">
          <NavBar />
      </Route>

    </Router>
      
  );
}

export default App;

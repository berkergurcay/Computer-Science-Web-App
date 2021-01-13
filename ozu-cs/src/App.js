import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Sophomore from './components/Sophomere';
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
        <Footer/>
      </Route>


      <Route path="/sophomore">
          <Header/>
          <NavBar />
          <Sophomore/>
          <Footer />
      </Route>

    </Router>
      
  );
}

export default App;

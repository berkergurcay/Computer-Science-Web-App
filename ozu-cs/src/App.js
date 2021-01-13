import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Sophomore from './components/Sophomere';
import Junior from './components/Junior';
import Freshman from './components/Freshman';
import Senior from './components/Senior';
import Register from './components/Register';
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


      <Route path="/freshman">
          <Header/>
          <NavBar />
          <Freshman/>
          <Footer />
      </Route>


      <Route path="/sophomore">
          <Header/>
          <NavBar />
          <Sophomore/>
          <Footer />
      </Route>

      <Route path="/junior">
          <Header/>
          <NavBar/>
          <Junior/>
          <Footer/>
      </Route>



      <Route path="/senior">
          <Header/>
          <NavBar />
          <Senior/>
          <Footer />
      </Route>

      <Route path="/register">
          <Header/>
          <NavBar />
          <Register/>
          <Footer />
      </Route>

    </Router>
      
  );
}

export default App;

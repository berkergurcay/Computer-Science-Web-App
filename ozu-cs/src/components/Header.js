import React from 'react'
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";


class Header extends React.Component {
    render() {
        return  <div className="main">
            <div id="ust">
                
                <BrowserRouter>
                    <Link to='/'><img id="logo" src="https://www.ozyegin.edu.tr/sites/default/files/logo-tr.png" alt=""/></Link>
                </BrowserRouter>

            </div>
        </div>
    }
}

export default Header;
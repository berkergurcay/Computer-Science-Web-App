import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import './Footer.css'
import Facebook from '../images/facebook.png';
import YouTube from '../images/youtube.png';
import Instagram from '../images/instagam.png';
import Twitter from '../images/twitter.png';


class Footer extends React.Component {
    render() {
        return  <div className="footer">
            <div id="socials">
                
                <BrowserRouter>
                    <Link to='/'><img id="icons" src={Facebook} alt=""/></Link>
                    <Link to='/'><img id="icons" src={YouTube} alt=""/></Link>
                    <Link to='/'><img id="icons" src={Instagram} alt=""/></Link>
                    <Link to='/'><img id="icons" src={Twitter} alt=""/></Link>
                </BrowserRouter>

            </div>
        </div>
    }
}

export default Footer;
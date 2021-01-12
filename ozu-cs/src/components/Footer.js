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

class Footer extends React.Component {
    render() {
        return  <div className="footer">
            <div id="socials">
                
                <BrowserRouter>
                    <Link to='/'><img id="icons" src="" alt=""/></Link>
                    <Link to='/'><img id="icons" src="" alt=""/></Link>
                    <Link to='/'><img id="icons" src="" alt=""/></Link>
                    <Link to='/'><img id="icons" src="https://banner2.kisspng.com/20171216/213/facebook-logo-png-5a35528eaa4f08.7998622015134439826976.jpg" alt=""/></Link>
                </BrowserRouter>

            </div>
        </div>
    }
}

export default Footer;
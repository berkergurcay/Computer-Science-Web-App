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
import './NavBar.css'
import Sophomore from './Sophomere.js'


class NavBar extends React.Component {
    
    
    render() {
        return <nav>
            <div id="menu-outer">
 
                    <Button href="/register" id="nav-button" variant="success" size="lg">
                        Register
                    </Button>
 
                        <Dropdown navbar="true">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Classes
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/freshman" id="classes">Freshman</Dropdown.Item>
                                <Dropdown.Item href="/sophomore" id="classes">Sophomore</Dropdown.Item>
                                <Dropdown.Item href="/junior" id="classes">Junior</Dropdown.Item>
                                <Dropdown.Item href="/senior" id="classes">Senior</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                <Button href="/" id="nav-button" variant="success" size="lg">
                    Home
                </Button>
            </div>
        </nav >
    }
}

export default NavBar;
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


class NavBar extends React.Component {
    render() {
        return <nav>
            <div id="menu-outer">
 
                    <Button href="#" id="nav-button" variant="success" size="lg">
                        Register
                    </Button>
 
                        <Dropdown navbar="true">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Classes
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" id="classes">Freshman</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" id="classes">Sophomore</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" id="classes">Junior</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" id="classes">Senior</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                <Button href="#" id="nav-button" variant="success" size="lg">
                    Home
                </Button>
            </div>
        </nav >
    }
}

export default NavBar;
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './NavBar.css';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
         
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Classes
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/freshman">
                  Freshman
                </DropdownItem>
                <DropdownItem href="/sophomore">
                  Sophomore
                </DropdownItem>
                <DropdownItem href="/junior">
                  Junior
                </DropdownItem>
                <DropdownItem href="/senior">
                  Senior
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
 }
export default Example;




/* <nav>
            <div id="menu-outer">
 
                    <Button href="/register" id="nav-button" variant="success" size="lg">
                        Register
                    </Button>
 
                        <Dropdown navbar="true" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
        </nav > */

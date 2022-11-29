import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNav() {
    function showLoggin() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            );
        }
    }
    return (
        <header className="flex-row">
            <nav>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>Home
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="The Basics"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item>
                                        Lesson 1
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 2
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 3
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 4
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 5
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 6
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 7
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 8
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 9
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 10
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 11
                                    </Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Advanced"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item>
                                        Lesson 1
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 2
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 3
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 4
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 5
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 6
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 7
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 8
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 9
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 10
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Lesson 11
                                    </Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Puzzles"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item>
                                        Puzzle 1
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 2
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 3
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 4
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 5
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 6
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 7
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 8
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 9
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 10
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Puzzle 11
                                    </Dropdown.Item>
                                </NavDropdown>
                                {showLoggin()}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </header>
    );
}

export default AppNav;

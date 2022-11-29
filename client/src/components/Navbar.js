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
                                        <Link to="/Basic1">Basic1</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic2">Basic2</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic3">Basic3</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic4">Basic4</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic5">Basic5</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic6">Basic6</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic7">Basic7</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic8">Basic8</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic9">Basic9</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic10">Basic10</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Basic11">Basic11</Link>
                                    </Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Advanced"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item>
                                        <Link to="/Advanced1">Advanced1</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced2">Advanced2</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced3">Advanced3</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced4">Advanced4</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced5">Advanced5</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced6">Advanced6</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced7">Advanced7</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced8">Advanced8</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced9">Advanced9</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced10">Advanced10</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Advanced11">Advanced11</Link>
                                    </Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Puzzles"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item>
                                        <Link to="/Puzzle1">Puzzle1</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle2">Puzzle2</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle3">Puzzle3</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle4">Puzzle4</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle5">Puzzle5</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle6">Puzzle6</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle7">Puzzle7</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle8">Puzzle8</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle9">Puzzle9</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle10">Puzzle10</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/Puzzle11">Puzzle11</Link>
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

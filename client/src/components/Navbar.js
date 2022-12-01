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
                <ul className="flex-row list-unstyled mx-4">
                    <li className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className='btn btn-secondary' href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="d-flex list-unstyled mx-4">
                    <li className="mx-1">
                        <Link to="/signup" className='btn btn-secondary text-decoration-none text-white'>Signup</Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login" className='btn btn-secondary text-decoration-none text-white'>Login</Link>
                    </li>
                </ul>
            );
        }
    }
    return (
        <header className="d-flex justify-content-between align-items-center">
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">Home
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="The Basics"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item as={Link} to="/Basic1">Basic1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic2">Basic2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic3">Basic3</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic4">Basic4</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic5">Basic5</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic6">Basic6</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic7">Basic7</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic8">Basic8</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic9">Basic9</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic10">Basic10</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Basic11">Basic11</Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Advanced"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item as={Link} to="/Advanced1">Advanced1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced2">Advanced2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced3">Advanced3</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced4">Advanced4</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced5">Advanced5</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced6">Advanced6</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced7">Advanced7</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced8">Advanced8</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced9">Advanced9</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced10">Advanced10</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Advanced11">Advanced11</Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Puzzles"
                                    menuVariant="dark"
                                >
                                    <Dropdown.Item as={Link} to="/Puzzle1">Puzzle1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle2">Puzzle2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle3">Puzzle3</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle4">Puzzle4</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle5">Puzzle5</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle6">Puzzle6</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle7">Puzzle7</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle8">Puzzle8</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle9">Puzzle9</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle10">Puzzle10</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Puzzle11">Puzzle11</Dropdown.Item>
                                </NavDropdown>
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {showLoggin()}
        </header>
    );
}

export default AppNav;

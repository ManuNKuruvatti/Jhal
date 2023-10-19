import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Navbar.css';
import { FiAlignJustify } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ loggedInPerson, onLogin, onLogout }) => {
  const numberOfLoggedInUsers = 3; // Replace with the actual number of logged-in users

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Navbar className="navbar">
    <Navbar.Brand style={{ fontSize: '24px' }}>GE <FiAlignJustify /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#admin" className="nav-link">Admin</Nav.Link>
        <Nav.Link href="#people" className="nav-link">People</Nav.Link>
      </Nav>
      <Nav className="mx-auto">
        {/* This div creates space in the center */}
      </Nav>
      <Nav className="ml-auto navbar-right">
      <NavDropdown title="Ararat" id="user-dropdown" className="nav-dropdown">
          <NavDropdown.Item>
            <i className="bi bi-diamond">option1</i> {numberOfLoggedInUsers}
          </NavDropdown.Item>
          <NavDropdown.Item>
            <i className="bi bi-diamond">option2</i> {numberOfLoggedInUsers}
          </NavDropdown.Item>
          <NavDropdown.Item>
            <i className="bi bi-diamond">option3</i> {numberOfLoggedInUsers}
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Manu" id="basic-nav-dropdown" className="nav-dropdown">
          <NavDropdown.Item href="#profile"><i className="bi bi-person"></i> Profile</NavDropdown.Item>
          <NavDropdown.Item href="#darktheme"><i className="bi bi-toggle-on"></i> Dark Theme On/Off</NavDropdown.Item>
          <Button onClick={() => handleLogout()} variant="outline-primary" >
            <i className="bi bi-box-arrow-in-right"></i> Logout
          </Button>
        </NavDropdown>
        
        <Nav.Item>
          <i className="bi bi-heart" style={{ color: 'red' }}></i> 10
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  );
};

export default NavBar;

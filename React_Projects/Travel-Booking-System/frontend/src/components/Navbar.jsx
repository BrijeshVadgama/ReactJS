import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="ms-start">
          Travel Booking System
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleNavbarToggle}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleLinkClick}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/addtraveler" onClick={handleLinkClick}>
              Add Traveler
            </Nav.Link>
            <Nav.Link as={Link} to="/travelers" onClick={handleLinkClick}>
              View Traveler
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

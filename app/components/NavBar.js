import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

import styled from 'styled-components';

const Wrapper = styled.div`
  .mr-auto > .nav-link.active {
    color: white;
  }

  .login {
  }

  .form-control {
    margin: 10px 0;
  }
`;

export const NavBar = () => (
  <Wrapper>
    <Navbar bg="info" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <LinkContainer exact to="/action/3.1">
              <NavDropdown.Item>Action</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <LinkContainer exact to="/login">
            <Nav.Link className="ml-0 ml-lg-4">
              <Button className="login" variant="dark">
                Login
              </Button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Wrapper>
);

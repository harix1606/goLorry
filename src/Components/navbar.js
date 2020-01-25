import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../bootstrap/dist/css/bootstrap.min.css';





function Navigation (){
	return (
		<Container>
			<Navbar className="justify-content-center" fixed="top" bg="light" expand="lg">
			  <Navbar.Brand href="#home">Go Lorry</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="#home">Home</Nav.Link>
			      <Nav.Link href="#link">Favourites</Nav.Link>			      
			    </Nav>
			    <Form inline>
			      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			      <Button variant="outline-success">Search</Button>
			    </Form>
			  </Navbar.Collapse>
			</Navbar>
		</Container>

		);

	

}

export default Navigation;
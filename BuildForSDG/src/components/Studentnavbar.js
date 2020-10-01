// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom"; // this helps us to link to different routes
import "../css/Studentnavbar.scss";

//import "../styles.css";
//import {Navbar , NavDropdown, Nav, Form, Button, FormControl } from "react-bootstrap";

function Studentnavbar(){
    return (
<div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light studentnavigationBar">
  <Link className="navbar-brand studentnavigationBar" to="/">FindATutor</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active studentnavigationBar">
        {/* <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link> */}
      </li>
      <li className="nav-item studentnavigationBar">
        <Link className="nav-link studentnavigationBar" to="/Login">Login</Link>
      </li>
      <li className="nav-item studentnavigationBar">
        <Link className="nav-link studentnavigationBar" to="/SignUpTutor">Join as a Tutor</Link>
        
      </li>
      <li className="nav-item studentnavigationBar">
        <Link className="nav-link studentnavigationBar" to="/SignUpStudent" tabindex="-1" aria-disabled="true"><img className="imglink" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="hello.jgp "/></Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
}
// eslint-disable-next-line
{/* 
    
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Login">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}


export default Studentnavbar;

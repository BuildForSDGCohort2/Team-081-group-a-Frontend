// eslint-disable-next-line
import React from "react";
import "../css/navbar.scss";
import {Navbar, Nav} from "react-bootstrap";

function NavigationBar(){
    return (
<div> 


 <Navbar className="navigation-container"  expand="lg">
   <Navbar.Brand className='navbar-brand' href="/">Academmia</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
     <Nav >
     
       <Nav.Link   href="/Login" className="item" style={{color:"black"}}>Login</Nav.Link>
       <Nav.Link className="item" href="/SignUpTutor" style={{color:"black"}}>Join as a Tutor</Nav.Link>
       <Nav.Link className="item" href="/SignUpStudent" style={{color:"black"}}>Join as a Student</Nav.Link>
     </Nav>
  </Navbar.Collapse>
 </Navbar>
 
</div>
    );
}

export default NavigationBar;


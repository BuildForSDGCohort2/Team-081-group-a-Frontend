import React, { useState } from 'react'
import SignUpStudent from './SignUpStudent';
import SignUpTutor from './SignUpTutor';
import Home from './Home'
import About from './About'
import Login from './Login'
import { 
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function LandingPage() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Container>
        <Row>
          <Col>
            {/* <Switch> */}
              <Route path="/" render={() => (
                <Home />
              )}
              />
              <Route path="/about" render={() => (
                <About />
              )}
              />
              <Route path="/login" render={() => (
                <Login />
              )}
              />
              <Route path="/student-signup" render={() => (
                <SignUpStudent />
              )}
              />
              <Route path="/tutor-signup" render={() => (
                <SignUpTutor />
              )}
              />
            {/* </Switch> */}
          </Col>
          <Col>
            Image file
          </Col>
        </Row>
      </Container>
    </Router>
  )
}


export default LandingPage;


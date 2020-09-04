import React, { useState } from 'react'
import '../css/landing-page.scss'
import SignUpStudent from './SignUpStudent';
import SignUpTutor from './SignUpTutor';
import Home from './Home'
import About from './About'
import Login from './Login'
import { 
  Container,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function LandingPage() {

  return (
    <div className="wrapper">

      <Router>
        <div >
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
        </div>
        <Container>
          <Row className>
            <Col className="flex-display">
              <h2>Find a Tutor</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
              <div className="signup-button-wrapper">
                <Button 
                  className="signup-button"
                  variant="danger"
                >
                  STUDENT
                </Button>
                <Button
                  className="signup-button"
                  variant="danger"
                >
                  TUTOR
                </Button>
              </div>
            </Col>
            {/* <Col>
              <Image
                src={landingImage}
                alt="landing page image"
                width="900"
                height="900"
              />
            </Col> */}
          </Row>
        </Container>
      </Router>
    </div>
  )
}


export default LandingPage;


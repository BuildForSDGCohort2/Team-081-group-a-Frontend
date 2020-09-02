import React from 'react'
import {
  Row,
  Container,
  Form,
  Col,
  Button,
} from 'react-bootstrap'
import useField from '../hook';

function Login(props) {
  const email = useField('email')
  const password = useField('password')
  
  return (
    <Container>
      <Row>
        <Col className="left-col">
          <h2>Find A Tutor</h2>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
        </Col>

        <Col>
            <Form>
              <h3>Login</h3>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter Email"
                  {...email}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  placeholder="Enter Password"
                  {...password}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;

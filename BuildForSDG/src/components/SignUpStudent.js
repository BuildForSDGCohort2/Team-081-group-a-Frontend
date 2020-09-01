import React, { useState } from 'react'
import { getValueFromEvent } from '../utils/clientUtils'
import useField from '../hook/index'
import {
  Form,
  Row,
  Col,
  Container,
  Button
} from 'react-bootstrap'

function SignUpStudent(props) {
  const firstname = useField('text').form
  const lastname = useField('text').form
  const email = useField('email').form
  const [education, setEducation] = useState('')

  const handleInputChange = (e) => {
    const newValue = getValueFromEvent(e).firstname
    
    console.log(newValue)

  }

  return (
      <Container>
        <Row>
          <Col>
            <Form>
              <h3>Student Signup</h3>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="firstname"
                  name="firstname"
                  placeholder="Firstname"
                  {...firstname}
                  />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  // type="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  {...lastname}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  // type="email"
                  name="email"
                  placeholder="Enter Email"
                  {...email}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Level of Education</Form.Label>
                <Form.Control as="select">
                  <option>Certificate</option>
                  <option>Bachelors Degree BSc.</option>
                  <option>Masters Degree MS.</option>
                  <option>Doctorate PhD</option>
                </Form.Control>
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

export default SignUpStudent;

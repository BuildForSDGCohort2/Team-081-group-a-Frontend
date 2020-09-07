// eslint-disable-next-line
import React, { useState } from 'react'
import useField from '../hook/index'
import {
  Form,
  Row,
  Col,
  Container,
  Button
} from 'react-bootstrap'
import Footer from "./footer";

function SignUpTutor(props) {
  const firstname = useField('text').form
  const lastname = useField('text').form
  const email = useField('email').form
  const password = useField('password').form
  const date = useField('date').form
  const phone = useField('text').form
  const job = useField('text').form
  const experience = useField('text').form

  return (
    <div>
      <Container>
      <h2 style={{textAlign: 'center'}}>Tutor Signup</h2>
        <Row className="justify-content-md-center signup-row">
          
          <Col className="signup-col border" xs="8">
            <h3 className="">Personal Information</h3>
            <Form className="form-style">
              <Col className="form-syle-col1">
                <Form.Group controlId="exampleForm.ControlInput3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="form-input bg-light"
                    name="email"
                    placeholder="Enter Email"
                    {...email}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="form-input bg-light"
                    name="password"
                    placeholder="Enter Password"
                    {...password}
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      name="firstname"
                      placeholder="Firstname"
                      {...firstname}
                      />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      name="lastname"
                      placeholder="Lastname"
                      {...lastname}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      name="date"
                      placeholder="date"
                      {...date}
                      />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      name="phone"
                      {...phone}
                      />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.File
                    className="position-relative"
                    required
                    name="file"
                    label="File"
                    onChange
                    isInvalid
                    feedback
                    id="validationFormik107"
                    // feedbackTooltip
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik103">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      as="select">
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                      
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik104">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      as="select">
                      <option value="" selected="selected">- Select -</option>
                      <option value="Abia">Abia</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="AkwaIbom">AkwaIbom</option>
                      <option value="Anambra">Anambra</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Bayelsa">Bayelsa</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Delta">Delta</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Edo">Edo</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Enugu">Enugu</option>
                      <option value="FCT">FCT</option>
                      <option value="Gombe">Gombe</option>
                      <option value="Imo">Imo</option>
                      <option value="Jigawa">Jigawa</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Kogi">Kogi</option>
                      <option value="Kwara">Kwara</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Nasarawa">Nasarawa</option>
                      <option value="Niger">Niger</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Ondo">Ondo</option>
                      <option value="Osun">Osun</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Sokoto">Sokoto</option>
                      <option value="Taraba">Taraba</option>
                      <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamafara</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {/* {errors.state} */}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
              </Col>
              

              <h3 className=" work-col">Work Information</h3>
              <Col className="form-style-col2">
                <Form.Group controlId="exampleForm.ControlSelect5">
                  <Form.Label>Level of Education</Form.Label>
                  <Form.Control
                    className="form-input bg-light"
                    as="select">
                    <option>Certificate</option>
                    <option>Bachelors Degree BSc.</option>
                    <option>Masters Degree MS.</option>
                    <option>Doctorate PhD</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect5">
                  <Form.Label>Current Job</Form.Label>
                  <Form.Control
                    className="form-input bg-light"
                    name={job}
                    {...job}
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect5">
                    <Form.Label>Years of Experince</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      name={experience}
                      {...experience}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect5">
                    <Form.Label>Certifications</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      as="select">
                      <option>Certificate 1</option>
                      <option>Certificate 2</option>
                      <option>Certificate 3</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button variant="secondary" type="submit" block>
                  Register
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
        
      </Container>
      <Footer/>
      </div>
  )
}

export default SignUpTutor;

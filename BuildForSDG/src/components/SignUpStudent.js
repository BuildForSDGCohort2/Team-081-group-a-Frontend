import React from 'react'
import useField from '../hook/index'
import {
  Form,
  Row,
  Col,
  Container,
  Button,
} from 'react-bootstrap'
import '../css/sign-up-tutor.scss'

function SignUpStudent(props) {
  const firstname = useField('text').form
  const lastname = useField('text').form
  const email = useField('email').form
  const password = useField('password').form
  const date = useField('date').form
  const phone = useField('text').form


  return (
      <Container className="container-wrapper">
          <Row className="d-flex align-items-center justify-content-md-center signup-row">
              <h2>Create a Student Account</h2>
              <p>Please fill the form to create an account with us</p>
              <Col xs="10" lg="8" md="10" className="signup-col border">
              <h3 className="">Personal Information</h3>
                <Form className="form-style">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      placeholder="Enter Email"
                      {...email}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      placeholder="Enter Password"
                      {...password}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        name="firstname"
                        className="form-input bg-light"
                        placeholder="Firstname"
                        {...firstname}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        name="lastname"
                        className="form-input bg-light"
                        placeholder="Lastname"
                        {...lastname}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput5">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        name="date"
                        className="form-input bg-light"
                        placeholder="date"
                        {...date}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput6">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        className="form-input bg-light"
                        name="phone"
                        {...phone}
                        />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik103">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        className="form-input bg-light"
                        as="select"
                      >
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
                  <Form.Group controlId="exampleForm.ControlSelect7">
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
                <Button variant="secondary" type="submit" block>
                  Register
                </Button>
              </Form>
              </Col>
            </Row>
      </Container>
  )
}

export default SignUpStudent;

// eslint-disable-next-line
import React, {useState} from "react";
import {Row,Container,Form,Col, Button,} from "react-bootstrap";
// import useField from "../hook";
import "../css/Login.scss";
import NavigationBar from "./navbar";
import Foot from "./Foot";
import {emailValidator} from "./validator";

function Login(props) {
  // const email = useField("email");
  // const password = useField("password");
   
  const [loginDetails, setLoginDetails] = useState({
    email : "",
    password : ""
  });

  const [tutorMessage, setTutorMessage] = useState([]);

  const [studentMessage, setStudentMessage] = useState([]);

  const onChangeDetails = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginDetails({
      ...loginDetails,
      [name] : value
    });
    console.log(loginDetails);
  }

   const onClickLoginTutor = (e) => {

    setTutorMessage([]);
    
    const {email, password} = loginDetails;

    if(!emailValidator(email) || password.length < 7){

      if(!emailValidator(email)){
        setTutorMessage((prev) => [...prev, "invalid email" ])
      }
      
      if (password.length < 7){
        setTutorMessage((prev) => [...prev, "password should be 7 or more characters "]);
      
      }

    }

    else {
      setTutorMessage(["login successfull"]);
    }

    e.preventDefault();
  }

  const onClickLoginStudent = (e) => {

    setStudentMessage([]);
    
    const {email, password} = loginDetails;

    if(!emailValidator(email) || password.length < 7){

      if(!emailValidator(email)){
        setStudentMessage((prev) => [...prev, "invalid email" ])
      }
      
      if (password.length < 7){
        setStudentMessage((prev) => [...prev, "password should be 7 or more characters "]);
      
      }

    }

    else {
      setStudentMessage(["login successfull"]);
    }

    e.preventDefault();
  }

  
  return (
    <div className="loginPage">
      <NavigationBar />
      <div className="login-container">
    <Container>
      <Row className="login-wrapper">
        <Col className="left-col">
        <Form className="form-style">
              <h3 className="tutor-login-header">Tutor Login</h3>
              <div><ul>{tutorMessage.map((msg, i) => <li key={i}>{msg}</li>)}</ul></div>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  className="form-input bg-light"
                  name="email"
                  placeholder="Enter Email"
                  onChange={onChangeDetails}
                  required
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="form-input bg-light"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={onChangeDetails}
                  required
                />
              </Form.Group>
              <Button className="btn-success" type="submit" onClick={onClickLoginTutor}>
                Login
              </Button>
          </Form>
        </Col>

        <Col>
            <Form className="form-style">
              <h3 className="student-login-header">Student Login</h3>
              <div><ul>{studentMessage.map((msg, i) => <li key={i}>{msg}</li>)}</ul></div>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-input bg-light"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  onChange={onChangeDetails}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="form-input bg-light"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={onChangeDetails}
                  required
                />
              </Form.Group>
              <Button className="btn-primary" type="submit" onClick={onClickLoginStudent}>
                Login
              </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
    <Foot />
    </div>
  )
}

export default Login;

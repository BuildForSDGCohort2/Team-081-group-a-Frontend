import React,{useState} from 'react';
// import useField from '../hook/index'
import {Form,Row,Col,Container,Button} from 'react-bootstrap';
import '../css/sign-up-tutor.scss';
import {emailValidator, nameValidator, passwordValidator, phoneValidator} from "./validator";
import NavigationBar from "./navbar";
import Foot from "./Foot";
// import axios from 'axios';

function SignUpStudent(props) {
    
  // const firstname = useField('text').form
  // const lastname = useField('text').form
  // const email = useField('email').form
  // const password = useField('password').form
  // const date = useField('date').form
  // const phone = useField('text').form

  const [studentSignupDetails, setStudentSignupDetails] = useState({
    email : '',
    password : '',
    firstname : '',
    lastname : '',
    date : '',
    phone : '',
    gender : '',
    state : '',
    education_level : ''

  });

  const [message, setMessage] = useState([]);


  const onChangeSignupDetaiils = (e) => {
    setMessage([]);
    let name = e.target.name;
    let value = e.target.value;

    setStudentSignupDetails({
      ...studentSignupDetails,
      [name] : value
    });

    console.log(studentSignupDetails);

  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    setMessage([]);
    const {email, password, phone, firstname, lastname} = studentSignupDetails;


    if(!emailValidator(email) || !nameValidator(firstname) || !nameValidator(lastname)  || !passwordValidator(password) || !phoneValidator(phone)){

      if(!emailValidator(email)){
        setMessage((prev) => [...prev, "invalid email"]);
      }

      if(!nameValidator(firstname)){
        setMessage((prev) => [...prev, "Invalid firstname"]);
      }

      if(!nameValidator(lastname)){
        setMessage((prev) => [...prev, "Invalid lastname"]);
      }

      if(!passwordValidator(password)){
        setMessage((prev) => [...prev, "password should not contain whitespace and should be 7 or above characters "]);
      }

      if(!phoneValidator(phone)){
        setMessage((prev) => [...prev, "Incorrect phone Number"]);
      }
    }

    else{
      setMessage(["student registration successfull"]);
    }
  }


  return (
    <div>
      <NavigationBar />
      <Container className="container-wrapper">
          <Row className="d-flex align-items-center justify-content-md-center signup-row">
              <h2>Create a Student Account</h2>
              <p>Please fill the form to create an account with us</p>
              <div><ul>{message.map((msg, i) => <li key={i}>{msg}</li>)}</ul></div>
              <Col xs="12" lg="8" md="12" className="signup-col border">
              <h3 className="">Personal Information</h3>
                <Form className="form-style">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name="email"
                      placeholder="Enter Email"
                      required
                      onChange={onChangeSignupDetaiils}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                       type="password"
                      name="password"
                      placeholder="Enter Password"
                      required
                      onChange={onChangeSignupDetaiils}
                    
                    />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstname"
                        className="form-input bg-light"
                        placeholder="Firstname"
                        required
                        onChange={onChangeSignupDetaiils}
                        
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastname"
                        className="form-input bg-light"
                        placeholder="Lastname"
                        required
                        onChange={onChangeSignupDetaiils}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput5">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        className="form-input bg-light"
                        placeholder="date"
                        required
                        onChange={onChangeSignupDetaiils}
                        
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput6">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        className="form-input bg-light"
                        name="phone"
                        required
                        onChange={onChangeSignupDetaiils}
                        
                        />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik103">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        className="form-input bg-light"
                        name="gender"
                        as="select"
                        required
                        onChange={onChangeSignupDetaiils}

                      >
                         <option value="">Select </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Form.Control>
                        
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationFormik104">
                      <Form.Label>Location</Form.Label>
                      <Form.Control 
                        className="form-input bg-light"
                        name="state"
                        as="select"
                        required
                        onChange={onChangeSignupDetaiils}
                       
                        >
                        <option value="">- Select -</option>
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
                      {/* <Form.Control.Feedback type="invalid" tooltip>
                        {/* {errors.state} */}
                      {/* </Form.Control.Feedback> */} 
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="exampleForm.ControlSelect7">
                    <Form.Label>Level of Education</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      name="education_level"
                      as="select"
                      required
                      onChange={onChangeSignupDetaiils}
                    
                      >
                      <option value="">Select</option>
                      <option value="National Diploma"> National Diploma OND.</option>
                      <option value="Higher National Diploma">Higher National Diploma HND.</option>
                      <option value="Bachelors Degree Bsc.">Bachelors Degree BSc.</option>
                      <option value="Masters Degree Ms.">Masters Degree MS.</option>
                      <option value="Doctorate PhD">Doctorate PhD</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="secondary" type="submit" onClick={onClickSubmit} block>
                  Register
                </Button>
              </Form>
              </Col>
            </Row>
      </Container>
      <Foot />
      </div>
  )
}

export default SignUpStudent;

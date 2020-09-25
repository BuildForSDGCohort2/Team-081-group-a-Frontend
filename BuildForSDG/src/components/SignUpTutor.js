// eslint-disable-next-line
import React, { useState } from 'react'
// import useField from '../hook/index'
import {Form,Row,Col,Container,Button} from 'react-bootstrap';
 import NavigationBar from "./navbar";
 import Foot from "./Foot";
 import {emailValidator, nameValidator, passwordValidator, phoneValidator,fileValidator} from "./validator";

function SignUpTutor() {
  // const firstname = useField('text').form
  // const lastname = useField('text').form
  // const email = useField('email').form
  // const password = useField('password').form
  // const date = useField('date').form
  // const phone = useField('number').form
  // const job = useField('text').form
  // const experience = useField('text').form

  const [tutorSignup, setTutorSignup] = useState({
    email: "",
    password : '',
    firstname : '',
    lastname : '',
    date : '',
    phone: '',
    gender : '',
    state : '',
    eductional_level : "",
    job : '',
    experience : '',
    certifications : ''
  });

  const [message, setMessage] = useState([]);

  const [image, setImage] = useState('');

  const onChangeDetails = (e) => {
   const name = e.target.name;
    const value = e.target.value;

    setTutorSignup({
      ...tutorSignup,
      [name] : value
    });

    console.log(tutorSignup);
  };

  const onChangeFile = event => {
    const imageFile = event.target.files[0];
    
    setImage(imageFile);

    console.log(image);
    console.log(image.type);
    
  }

  const onClickTutorSubmit = (e) => {
    e.preventDefault();
    setMessage([]);
    const {email, password, phone, firstname, lastname} = tutorSignup;

    console.log(image.type);

    if(!emailValidator(email) || !nameValidator(firstname) || !fileValidator(image.type) || !nameValidator(lastname)  || !passwordValidator(password) || !phoneValidator(phone)){

      if(!emailValidator(email)){
        setMessage((prev) => [...prev, "invalid message"]);
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

      if(!fileValidator(image.type)){
        setMessage((prev) => [...prev, "only images allowed"]);
        console.log(message);
      }
      
    }

    else{
      setMessage(["student registration successfull"]);
    }
    console.log(message);
  }


  return (
    <div>
      <NavigationBar />
      <Container>
      <h2 style={{textAlign: 'center'}}>Tutor Signup</h2>
      <div><ul>{message.map((msg, i) => <li key={i}>{msg}</li>)}</ul></div>
        <Row className="justify-content-md-center signup-row">
          
          <Col className="signup-col border" xs="8">
            <h3 className="">Personal Information</h3>
            <Form className="form-style">
              <Col className="form-syle-col1">
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
                    type="password"
                    className="form-input bg-light"
                    name="password"
                    placeholder="Enter Password"
                    onChange={onChangeDetails}
                    required
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-input bg-light"
                      name="firstname"
                      placeholder="Firstname"
                      onChange={onChangeDetails}
                      required
                      />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-input bg-light"
                      name="lastname"
                      placeholder="Lastname"
                      onChange={onChangeDetails}
                      required
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      className="form-input bg-light"
                      name="date"
                      placeholder="date"
                      onChange={onChangeDetails}
                      required
                      />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      className="form-input bg-light"
                      name="phone"
                      onChange={onChangeDetails}
                      required
                      />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.File
                    className="position-relative"
                    type="file"
                    name="file"
                    label="File (image of certificate or statement of result of your highest qualification)"
                    onChange={onChangeFile}
                    isInvalid
                    feedback
                    id="validationFormik107"
                    required
                    // feedbackTooltip
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik103">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      as="select"
                      name="gender"
                      onChange={onChangeDetails}
                      required
                      >
                        <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Control>
                      
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik104">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      as="select"
                      name="state"
                      onChange={onChangeDetails}
                      required>
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
                       {errors.state} 
                    </Form.Control.Feedback> */}
                  </Form.Group>
                </Form.Row>
              </Col>
              

              <h3 className=" work-col">Work Information</h3>
              <Col className="form-style-col2">
                <Form.Group controlId="exampleForm.ControlSelect5">
                  <Form.Label>Level of Education</Form.Label>
                  <Form.Control
                    className="form-input bg-light"
                    as="select"
                    name="education_level"
                    onChange={onChangeDetails}
                    required>
                    <option value="">select</option>
                    <option value="National Diploma">Ordinary National Diploma OND.</option>
                    <option value="Higher National Diploma">Higher National Diploma</option>
                    <option value="Bachelors Degree BSc.">Bachelors Degree BSc.</option>
                    <option value="Masters Degree MS.">Masters Degree MS.</option>
                    <option value="Doctorate PhD">Doctorate PhD</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect5">
                  <Form.Label>Current Job</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input bg-light"
                    name="job"
                    onChange={onChangeDetails}
                    required
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect5">
                    <Form.Label>Years of Experince</Form.Label>
                    <Form.Control
                      type="number"
                      className="form-input bg-light"
                      name="experience"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect5">
                    <Form.Label>Certifications</Form.Label>
                    <Form.Control
                      className="form-input bg-light"
                      as="select"
                      name="certifications"
                       required>
                      <option >Certificate 1</option>
                      <option>Certificate 2</option>
                      <option>Certificate 3</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button variant="secondary" type="submit" onClick={onClickTutorSubmit} block>
                  Register
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
        
      </Container>
      <Foot/> 
      </div>
  )
}

export default SignUpTutor;

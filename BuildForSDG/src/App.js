import React from "react";
import SignUpStudent from "./components/SignUpStudent";
import SignUpTutor from "./components/SignUpTutor";
import Login from "./components/Login";
import "./css/app.scss";
import "./css/signup-login.scss";
import LandingPage from "./components/LandingPage";
<<<<<<< HEAD
import StudentHomePage from "./components/StudentHomePage";
// import Card from "./components/TutorCard";
=======
// import Foot from "./components/Foot";
// import NavigationBar from "./components/navbar";
>>>>>>> e5eac80430451d5308d5ed7e1d79c41fc17e17ea
//import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  //const [page, setPage] = useState('signup')
  // const [token, setToken] = useState('token')
  //const [token, setToken] = useState('')

// eslint-disable-next-line
  // if (!token) {
  //   return (
  //     <div className="App">
  //       <Home />
  //     </div>
  //   )
  // }
   
  return (
    <BrowserRouter>
    <div className="App">
      {/* <NavigationBar /> */}
      <Switch>
        <Route path="/" component={LandingPage} exact/> 
        <Route path="/Login" component={Login} />
        <Route path="/SignUpStudent" component={SignUpStudent} />
        <Route path="/SignUpTutor" component={SignUpTutor}/>
        <Route path="/studentHomePage" component={StudentHomePage}/>
        {/* <Route path="/tutorCard" component={Card}/> */}
      </Switch>
       {/* <Foot />  */}
    </div>
    </BrowserRouter>
    // eslint-disable-next-line
    // <div className="App">
    //   <h1>Find a Tutor app</h1>
    //   <SignUpStudent />
    //   <br/>
    //   <br/>
    //   <SignUpTutor />
    //   <br />
    //   <br />
    //   <Login />
    // </div>
  );
}

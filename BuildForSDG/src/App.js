import React from "react";
import SignUpStudent from './components/SignUpStudent'
import SignUpTutor from './components/SignUpTutor'
import Login from './components/Login'
import "./css/app.scss";
import "./css/signup-login.scss"
import LandingPage from "./components/LandingPage";
//import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
    {console.log("whatspopoin")}
      <Switch>
        <Route path="/" component={LandingPage} exact/> 
        <Route path="/Login" component={Login} />
        <Route path="/SignUpStudent" component={SignUpStudent} />
        <Route path="/SignUpTutor" component={SignUpTutor}/>
      </Switch>
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

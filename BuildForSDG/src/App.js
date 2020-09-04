import React, { useState } from "react";
import SignUpStudent from './components/SignUpStudent'
import SignUpTutor from './components/SignUpTutor'
import Login from './components/Login'
import "./css/app.scss";
import "./css/signup-login.scss"
import LandingPage from "./components/LandingPage";


export default function App() {
  const [page, setPage] = useState('signup')
  // const [token, setToken] = useState('token')
  const [token, setToken] = useState('')


  if (!token) {
    return (
      <div>
        <LandingPage />
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>Find a Tutor app</h1>
      <SignUpStudent />
      <br/>
      <br/>
      <SignUpTutor />
      <br />
      <br />
      <Login />
    </div>
  );
}

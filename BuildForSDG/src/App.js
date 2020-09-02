import React from "react";
import SignUpStudent from './components/SignUpStudent'
import SignUpTutor from './components/SignUpTutor'
import Login from './components/Login'
import "./css/app.scss";

export default function App() {
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

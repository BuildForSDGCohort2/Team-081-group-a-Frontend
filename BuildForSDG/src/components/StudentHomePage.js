import React from "react";
import Studentnavbar from "./Studentnavbar";
import StudentHomePageCarousel from "./StudentHomePageCarousel";
import "../css/StudentHomePage.scss";
import Card from "./TutorCard";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Footer from "./footer";
 function StudentHomePage(){
     return(
     <div>     
        <Studentnavbar/>
        <div className="carouseldiv"><StudentHomePageCarousel className="carousel"/></div>
        <section class="white-section" id="features">
        <div class='container'>
    <div class="row">
      <div class="col-lg-4 feature-box">
        <CheckCircleOutlineIcon className="icon"></CheckCircleOutlineIcon>
        <h3 class="feature-title">Easy to use.</h3>
        <p>So easy to use, even your dog could do it.</p>
      </div>
{/* <!-- Responsivness for features  */}
      <div class="col-lg-4 feature-box">
      <CheckCircleOutlineIcon className="icon"></CheckCircleOutlineIcon>
        <h3 class="feature-title">Elite Clientele</h3>
        <p>We have all the Tutors, the greatest tutors.</p>
      </div>

      <div class="col-lg-4 feature-box">
      <CheckCircleOutlineIcon className="icon"></CheckCircleOutlineIcon>
        <h3 class="feature-title">Guaranteed to work.</h3>
        <p>Find the love of your dog's life or your money back.</p>
      </div>
          </div>
    </div>
    </section>

    <section id="cardSection">
    <div className="row">
    <div className="col-lg-3"> <Card tutorname="Durant" content="Best English tutor" subject="English Language" studentType="college"/></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    <div className="col-lg-3"> <Card /></div>
    </div>
    </section>
    <div className="container-fluid">
            <Footer/>  
          </div>
     </div>);
 }

 export default StudentHomePage;
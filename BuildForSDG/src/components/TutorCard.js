import React from "react";
import "../css/TutorCard.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function TutorCard(props) {
  return (
    <div className="card">
      <Card className="card" style={{ width: "18rem" }}>
  <Card.Img variant="top" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />
  <Card.Body className="card-body">
    <Card.Title>Name : {props.tutorname}</Card.Title>
    <ul>
      <li>Subject Taught : {props.subject},</li>
      <li>Preferred Student: {props.studentType}</li>
    </ul>
    <Card.Text>
      Short Desc : {props.content}
    </Card.Text>
    <Button variant="secondary">Go Tutor Profile</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default TutorCard;

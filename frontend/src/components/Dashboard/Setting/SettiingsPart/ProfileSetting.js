import React from "react";
import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";
import SideBar from "../SideBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ProfileSetting = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <SideBar />
        </Col>
        <Col md={8}>
          <div className="profile">
            <h1>Profile</h1>
            <div className="profile__name">
              <h3>Name</h3>
              <div className="borderBottom">
               <input type="text" className="profile__name-Input" placeholder="Name"/>
              </div>
              <p className="profile__name-text"> Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSetting;

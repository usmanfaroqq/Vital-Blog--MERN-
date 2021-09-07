import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>User Signup</title>
        <meta name="description" content="User Signup" />
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <div className="account">
              <div className="account__section">
                <h1>
                  Create your account
                </h1>
                <form>
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      className="group__control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      className="group__control"
                      placeholder="username"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      className="group__control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="password"
                      name="password"
                      className="group__control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="loginRegisterBtn"
                      value="Signup"
                    />
                  </div>
                </form>
                <h4>Have an account <Link to="/login">Login here</Link></h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Container>
        <Row>
          <Col md={4}>
            <div className="sidebar__setting">
              <h1>Settings</h1>
              <div className="sidebar__setting-list">
                  <li  className="links">
                    <Link className="links" to="/me/profile">Profile</Link>
                  </li>
                  <li className="links">
                    <Link className="links" to="#">Design</Link>
                  </li>
                  <li className="links">
                    {" "}
                    <Link className="links" to="#">Email setting</Link>
                  </li>
                  <li className="links">
                    {" "}
                    <Link className="links" to="#">Connections</Link>
                  </li>
                  <li className="links">
                    {" "}
                    <Link className="links" to="#"> Account</Link>
                  </li>
                  <li className="links">
                    {" "}
                    <Link className="links" to="#">Membership</Link>
                  </li>

                  <li className="links">
                    <Link className="links" to="#">Privacy</Link>
                  </li>
              </div>
              <div className="sidebar__sidebar-footer">
                  <Link className="sidebar-footer" to="#">Help</Link>
                  <Link className="sidebar-footer" to="#">Status</Link>
                  <Link className="sidebar-footer" to="#">Privacy</Link>
                  <Link className="sidebar-footer" to="#">Terms</Link>
                  <Link className="sidebar-footer" to="#">About</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBar;

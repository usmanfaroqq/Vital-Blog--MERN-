import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const UpperNavbar = () => {
  return (
    <div className=" py-2 bg-dark border-bottom">
      <Container className="d-flex align-items-center justify-content-between ">
        <div className="list-unstyled d-flex align-items-center gap-4 ">
            <Link className="top__banner-text" to="/">  About</Link>
            <Link className="top__banner-text" to="/"> Events</Link>
            <Link className="top__banner-text" to="/"> Write for us</Link>
            <Link className="top__banner-text for-hidden" to="/"> In the press</Link>
        </div>
        <div>
            <Link className="top__banner-text" to="/login">
              Login
            </Link> / /
            <Link to="/register" className="top__banner-text">Register</Link>
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;

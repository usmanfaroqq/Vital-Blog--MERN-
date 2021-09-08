import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../../redux/types/AuthTypes";

const UpperNavbar = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("myToken");

    dispatch({ type: LOGOUT });
  };
  const Links = user ? (
    <>
      {" "}
      <Link to="/create-post" className="top__banner-text gap-2">
        Create Post
      </Link> //
      <Link className="top__banner-text gap-2" to="/dashboard">
        {user.name}
      </Link>{" "}
      / /
      <span className="top__banner-text  gap-2" onClick={logout}>
        Logout
      </span>{" "}
    </>
  ) : (
    <>
      {" "}
      <Link to="/login" className="top__banner-text  ">
        Login
      </Link>{" "}
      / /
      <Link to="/register" className="top__banner-text  ">
        Register
      </Link>{" "}
    </>
  );

  return (
    <div className=" py-2 bg-dark border-bottom">
      <Container className="d-flex align-items-center justify-content-between ">
        <div className="list-unstyled d-flex align-items-center gap-4 ">
          <Link className="top__banner-text" to="/">
            {" "}
            About
          </Link>
          <Link className="top__banner-text" to="/">
            {" "}
            Events
          </Link>
          <Link className="top__banner-text" to="/">
            {" "}
            Write for us
          </Link>
          <Link className="top__banner-text for-hidden" to="/">
            {" "}
            In the press
          </Link>
        </div>
        <div>{Links}</div>
      </Container>
    </div>
  );
};

export default UpperNavbar;

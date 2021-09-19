import React from "react";
import { Container, Dropdown } from "react-bootstrap";
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
  const link1 = user ? (
    <Link className="top__banner-text" to="/">
      {" "}
      Home
    </Link>
  ) : (
    <Link className="top__banner-text" to="/dashboard">
      {" "}
      Write your content
    </Link>
  );
  const Links = user ? (
    <>
      {" "}
      <Link to="/new-post" className="top__banner-text ">
        Create Post
      </Link>{" "} //
      
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="top__banner-text gap-2 dropdown"  style={{border:'none', outline:'none', color: 'white' ,padding: 0, marginTop: 0 , marginBottom: "4px"}}>
          <span className="dropdown__text" >{user.name}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdownMenu" >
          <Dropdown.Item>
            <Link className="dropdownText"  to="/dashboard">
              My Blogs
            </Link>{" "}
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className="dropdownText"  to="/new-post">
              Write a blog
            </Link>{" "}
          </Dropdown.Item>
          <Dropdown.Item >
          <Link className="dropdownText" to="/me/profile">
              Setting
            </Link>{" "}
          </Dropdown.Item>
          <Dropdown.Item >
          <span
        className="dropdownText"
        onClick={logout}
      >
        Logout
      </span>{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      / /
      
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
          {link1}
          <Link className="top__banner-text" to="/">
            About Us
          </Link>
          <Link className="top__banner-text for-hidden" to="/">
            Events
          </Link>
          <Link className="top__banner-text for-hidden" to="/">
            Policy
          </Link>
        </div>
        <div className="d-flex">{Links}</div>
      </Container>
    </div>
  );
};

export default UpperNavbar;

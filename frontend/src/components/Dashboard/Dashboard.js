import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../redux/types/PostTypes";
import toast, { Toaster } from "react-hot-toast";
// import swal from "sweetalert";
import { fetchPosts } from "../../redux/asyncMethods/PostMethods";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DashboardSkeleton from "../../skelatons/DashboardSkeleton";
import { BsThreeDots } from "react-icons/bs";
// import { BiShare } from "react-icons/bi";
import {Dropdown} from 'react-bootstrap'
import EmptyShow from "../common/EmptyShow/EmptyShow";
import DashboardPagination from '../common/Pagination/Pagination'


const Dashboard = () => {
  const { redirect, message, loading } = useSelector(
    (state) => state.PostReducer
  );
  const {
    user: { _id },
  } = useSelector((state) => state.AuthReducer);
  const { posts, count, perPage } = useSelector((state) => state.FetchPosts);
  let {page} = useParams(); // for pagiation
  if (page === undefined) {
    page = 1;
  }// pagiation
  const dispatch = useDispatch();
  useEffect(() => {
    if (redirect) {
      dispatch({ type: REDIRECT_FALSE });
    }
    if (message) {
      toast.success(message, {
        duration: 4000,
      });
      dispatch({ type: REMOVE_MESSAGE });
    }
    dispatch(fetchPosts(_id, page));
  }, [page]); // Showing post confirm message

  

  return (
    <>
      <Helmet>
        <title>Dashboard - Vital Blog</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            color: "green",
            fontSize: "1.5rem",
          },
        }}
      />
      <Container>
        <Row>
          <div className="dashboard">
            <h1>Your blogs</h1>

            <div className="dashboard__body">
              <div className="dashboard__body-header d-flex gap-4">
                <h4>Published {posts.length}</h4>
                <h4>
                  <Link to="/new-post" style={{ textDecoration: "none" }}>
                    Create new blog
                  </Link>
                </h4>
              </div>
              <Col md={12}>
                {!loading ? (
                  posts.length > 0 ? (
                    posts.map((post) => (
                      <div className="dashboard__body-card" key={post._id}>
                        <div className="dashboard__body-middle">
                          <h2>
                            <Link style={{ textDecoration: "none", color: "black" }}>
                              {post.title}
                            </Link>
                          </h2>
                          <h5>Content Short body</h5>
                        </div>
                        <div className="dashboard__body-lower gap-4">
                          <p>{post.createdAt}</p>
                          {/* <p><BiShare className="dashboard__body-lower-btn "  /></p> */}
                          <p>
                            <Dropdown  >
                              <Dropdown.Toggle className="dashboard__body-lower-btn "  
                                id="dropdown-basic">
                                <BsThreeDots/>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>
                                  <Link to={`/edit/${post._id}`} className="dashboard__body-lower-link">Edit</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                  <Link to={`/edit/cover-photo/${post._id}`} className="dashboard__body-lower-link">Edit Cover Photo</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                <Link to='#' className="dashboard__body-lower-link">Delete Post</Link>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <EmptyShow/>
                  )
                ) : (
                  <DashboardSkeleton length={posts.length} />
                )}
              <div className="dashboard__body-pagination">
              <DashboardPagination page={page} perPage={perPage} count={count} style={{justifyContent:"flex-end"}}/>
              </div>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;

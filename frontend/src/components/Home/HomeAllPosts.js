import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allHomePosts } from "../../redux/asyncMethods/HomeGetAllPostMethod";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";


const HomeAllPosts = () => {
  let { page } = useParams();
  if (page === undefined) {
    page = 1;
  }
  const { loading } = useSelector((state) => state.PostReducer);
  const { posts, count, perPage } = useSelector((state) => state.FetchPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allHomePosts(page));
  }, []);


  return (
    <div>
      <Container>
        <div className="blogCard">
          {!loading ? posts.length > 0 ? posts.map(post => (
              <Row>
              <Col md={4}>
                <div>
                  <Card.Img
                    className="blogCard-img img-fluid rounded-start"
                    variant="top"
                    src={post.image}
                  />
                </div>
              </Col>
              <Col md={8}>
                <div>
                  <Card.Body>
                    <Card.Title className="blogCard-title">
                      <Link className="blogCard-title-link">
                        {post.title}
                      </Link>
                    </Card.Title>
                    <Card.Text className="blogCard-shortDes">
                      {(post.body.slice(0,90)).replace(/<[^>]*>/g)}<Link className="blogCard-title-link">read more....</Link>
                    </Card.Text>
                    <Card.Text className="blogCard-author">
                     Posted at {moment(post.createdAt).format('ll')} by {post.userName}
                    </Card.Text>
                  </Card.Body>
                </div>
              </Col>
            </Row>
          )) : 'No post' : 'Fine'}
        </div>
      </Container>
    </div>
  );
};

export default HomeAllPosts;

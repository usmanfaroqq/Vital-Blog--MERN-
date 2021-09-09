import React from "react";
import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill";

const CreatePost = () => {
  return (
    <>
      <Helmet>
        <title>New Post - Vital Blog</title>
        <meta name="description" content="Create New Post" />
      </Helmet>
      ;
      <div className="create__post">
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <form action="">
                  <h1>Submit your Post</h1>
                  <div className="create__post-card">
                    <div className="create__post-group">
                      <h2>Post Information</h2>
                      <div className="textInputGroup">
                        <label htmlFor="title">Topic Title*</label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="textInputGroup__control"
                          placeholder="Blog Title"
                        />
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col md={4}>
                          <div>
                            <Form.Group
                              controlId="formFile"
                              className="mb-3 selectGroup"
                            >
                              <Form.Label>Featured Image *</Form.Label>
                              <Form.Control
                                type="file"
                                className="selectGroup-text"
                              />
                            </Form.Group>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="selectGroup">
                            <label htmlFor="title">Language</label>

                            <Form.Select
                              aria-label="Floating label select example"
                              className="selectGroup-text"
                            >
                              <option value="1">English</option>
                              <option value="2">Bangla</option>
                            </Form.Select>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="selectGroup">
                            <label htmlFor="title">Content type</label>

                            <Form.Select
                              aria-label="Floating label select example"
                              className="selectGroup-text"
                            >
                              <option value="1">News</option>
                              <option value="2">Business</option>
                              <option value="3">Magazine</option>
                              <option value="3">Sport</option>
                              <option value="3">Arts</option>
                              <option value="3">Culture</option>
                              <option value="3">Politics</option>
                              <option value="3">Style</option>
                              <option value="3">Travel</option>
                            </Form.Select>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <Row>
                      <Col md={6}>
                          <div className="textInputGroup">
                            <label htmlFor="description">
                              Meta description
                            </label>
                            <textarea
                              name="description"
                              id=""
                              cols="30"
                              rows="10"
                              className="textInputGroup__control"
                              placeholder="meta description...."
                              maxLength="200"
                            ></textarea>
                            <p className="description-p"></p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="textInputGroup">
                            <label htmlFor="title">Blog url</label>
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="textInputGroup__control"
                              placeholder="Blog url"
                            />
                          </div>
                          <div>
                            
                          </div>
                        </Col>
                        
                      </Row>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CreatePost;

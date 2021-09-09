import React, { useState, useEffect } from "react";
import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import swal from "sweetalert";

const CreatePost = (event) => {
  const [inputState, setInputState] = useState({
    title: "",
  });
  const [slug, setSlug] = useState("");
  const handleInputs = (event) => {
    setInputState({
      // title slugUrl
      ...inputState,
      [event.target.name]: event.target.value,
    });
    const createSlug = event.target.value.trim().split(" ").join("-");
    setSlug(createSlug);
  };
  const chnageUrl = (event) => {
    setSlug(event.target.value);
  };

  const [currentImage, setCurrentImage] = useState("Select an image");
  const imageHandle = (event) => {
    // select an image
    event.preventDefault();
    setCurrentImage(event.target.files[0].name);
  };

  const [category, setCategory] = useState([]);
  const selectedCategory = (event) => {
    // select category
    const data = { ...category };
    data[event.target.name] = event.target.value;
    setCategory(data);
  };

  // Body post content React quill
  const [value, setValue] = useState("");

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
                        onChange={handleInputs}
                        value={inputState.title}
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
                              name="image"
                              onChange={imageHandle}
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
                            onChange={selectedCategory}
                          >
                            <option>News</option>
                            <option>Business</option>
                            <option>Magazine</option>
                            <option>Sport</option>
                            <option>Arts</option>
                            <option>Culture</option>
                            <option>Politics</option>
                            <option>Style</option>
                            <option>Travel</option>
                          </Form.Select>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="textInputGroup">
                    <label htmlFor="body">
                      Describe your content in detail...
                    </label>
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                      placeholder="Lorem Ispum..."
                    />
                  </div>

                  <div>
                    <Row>
                      <Col md={6}>
                        <div className="textInputGroup">
                          <label htmlFor="description">Meta description</label>
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
                        <Row>
                          <Col md={11}>
                            <div className="textInputGroup">
                              <label htmlFor="title">Blog url</label>
                              <input
                                type="text"
                                name="title"
                                id="title"
                                className="textInputGroup__control"
                                placeholder="Blog url"
                                value={slug}
                                onChange={chnageUrl}
                              />
                            </div>
                          </Col>
                          <Col md={1}>
                            <div className="create__post-blogUrlBtn ">
                              <button className="btn btn-primary">
                                Update
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CreatePost;

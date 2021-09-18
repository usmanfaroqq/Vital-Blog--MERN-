import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const EditCoverImage = () => {
  const {id} = useParams();
  const [state, setState] = useState({
    image: "",
    imagePreview: "",
  });
  const imageHandle = (event) => {
    if (event.target.files.length > 0) {
      setState({
        ...state,
        image: event.target.files[0],
        imageName: event.target.files[0].name,
      });
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setState({ ...state, imagePreview: fileReader.result });
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <div className="create__post">
      <Helmet>
        <title>Edit Post - Vital Blog</title>
        <meta name="edit-post" content="edit-post" />
      </Helmet>
      <Container>
        <Row>
          <h1 className="editMyBlogTitle">Change your blog cover photo</h1>
          <Col md={12}>
            <div>
              <Form.Group controlId="formFile" className="mb-3 selectGroup">
                <Form.Label>Featured Image *</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  className="selectGroup-text"
                  onChange={imageHandle}
                />
              </Form.Group>
            </div>
          </Col>
          <Col md={12}>
            <div className="textInputGroup">
              <div className="imagePreview">
                {state.imagePreview ? (
                  <img src={state.imagePreview} alt={state.imagePreview} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </Col>
            <div className="group">
              <input
                type="submit"
                value="Update Image"
                className="create__post-submitBlogBtn"
              />
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default EditCoverImage;

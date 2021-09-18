import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";

const EditCoverImage = () => {
  const [state, setState] = useState({
    image: "",
    imagePreview: "",
  });
  const imageHandle = (event) => {
    
  }
  return (
    <div className="create__post">
      <Helmet>
        <title>Edit Post - Vital Blog</title>
        <meta name="edit-post" content="edit-post" />
      </Helmet>
      <Container>
        <Row>
          <h1 className="editMyBlogTitle">Change your blog cover photo</h1>
          <Col md={6}>
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
          <Col md={6}>
            <div className="textInputGroup">
              <div className="imagePreview">
                {/* {imagePreview ? (
                  <img src={imagePreview} alt={imagePreview.name} />
                ) : (
                  ""
                )} */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditCoverImage;

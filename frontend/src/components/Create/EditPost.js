import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchSinglePost, updatePost } from "../../redux/asyncMethods/PostMethods";
import { POST_RESET } from "../../redux/types/PostTypes";

const EditPost = () => {
  const { id } = useParams();
  // Body post content React quill
  const [value, setValue] = useState('');
  const [editState, setEditState] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.PostReducer);
  const { post, postStatus } = useSelector((state) => state.FetchSinglePost);
  useEffect(() => {
    if (postStatus) {
      setEditState({
        title: post.title,
        description: post.description,
      });
			setValue(post.body);
      dispatch({ type: POST_RESET });
    } else {
      dispatch(fetchSinglePost(id));
    }
  }, [post]);


  const updateEditedPost = event => {
    event.preventDefault();
    // console.log(value)
    // dispatch(updatePost({
    //   title: editState.title,
    //   body: value,
    //   description: editState.description,
    // }))
  }
  console.log(post)
  return (
    <div>
      <Helmet>
        <title>Edit Post - Vital Blog</title>
        <meta name="edit-post" content="edit-post" />
      </Helmet>
      <div className="create__post">
        <Container>
          <Row>
            <Col md={12}>
              <form onSubmit={updateEditedPost}>
                <div className="create__post-card">
                  <div className="create__post-group">
                    <h2>Post Information</h2>
                    <div className="textInputGroup">
                      <label htmlFor="title">Topic Title*</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="textInputGroup__control"
                        placeholder="Blog Title"
                        value={editState.title}
                        onChange={(e) =>
                          setEditState({ ...editState, title: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="textInputGroup">
                    <label htmlFor="body">
                      Describe your content in detail...
                    </label>
                    <ReactQuill
                      theme="snow"
                      id='body'
                      placeholder="Lorem Ispum..."
                      value={value}
                      onChange={setValue}
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
                            defaultValue={editState.description}
                            onChange={(e) =>
                              setEditState({
                                ...editState,
                                description: e.target.value,
                              })
                            }
                          ></textarea>
                          <p className="description-p">
                            {" "}
                            {editState.description
                              ? editState.description.length
                              : 0}{" "}
                          </p>
                        </div>
                      </Col>
                      {/* <Col md={6}>
                        <div>
                          <Form.Group
                            controlId="formFile"
                            className="mb-3 selectGroup"
                          >
                            <Form.Label>Featured Image *</Form.Label>
                            <Form.Control
                              type="file"
                              name="image"
                              className="selectGroup-text"
                            />
                          </Form.Group>
                        </div>
                      </Col> */}
                    </Row>
                    <div className="group">
                      <input
                        type="submit"
                        value="Submit Post"
                        className="create__post-submitBlogBtn"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EditPost;

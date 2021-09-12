import axios from "axios";
import {
  POST_ERRORS,
  REMOVE_ERRORS,
  SET_LOADER,
  CLOSE_LOADER,
  REDIRECT_TRUE,
  SET_MESSAGE,
} from "../types/PostTypes";
const token = localStorage.getItem("myToken");
export const createAction = (formData) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const {data:  {msg} } = await axios.post("createNew_post", formData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REMOVE_ERRORS });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: msg });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_ERRORS, payload: errors });
    }
  };
};

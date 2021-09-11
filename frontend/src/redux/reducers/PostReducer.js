import { POST_ERRORS, SET_LOADER, CLOSE_LOADER } from "../types/PostTypes";
const initState = {
  loading: false,
  createErrors: [],
};

const PostReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (type === POST_ERRORS) {
    return { ...state, createErrors: action };
  } else {
    return state;
  }
};

export default PostReducer;

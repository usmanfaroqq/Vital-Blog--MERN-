import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {PostReducer, FetchPosts, FetchSinglePost} from "./reducers/PostReducer";

const rootReducer = combineReducers({
  AuthReducer,
  PostReducer,
  FetchPosts,
  FetchSinglePost
});

const middlewares = [thunkMiddleware ];
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export default Store;

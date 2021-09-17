const express = require("express");
const postRouter = express.Router();
const postControllers = require("../controllers/postControllers");

postRouter.post("/createNew_post", postControllers.createPost);
postRouter.get("/posts/:id/:page", postControllers.fetchPosts);
postRouter.get("/post/:id", postControllers.fetchSinglePost);


module.exports = postRouter;

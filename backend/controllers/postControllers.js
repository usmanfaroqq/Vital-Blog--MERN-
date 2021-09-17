const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const postSchema = require("../models/Post");

const createPost = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (error, fields, files) => {
    const { title, description, category, body, slug, id, name } = fields;
    const errors = [];
    if (title === "") {
      errors.push({ msg: "Topic Title is required" });
    }
    if (body === "") {
      errors.push({ msg: "Topic Content is required" });
    }
    if (description === "") {
      errors.push({ msg: "Description is required" });
    }
    if (category === "") {
      errors.push({ msg: "Topic Category is required" });
    }
    if (slug === "") {
      errors.push({ msg: "Slug Category is required" });
    }
    if (Object.keys(files).length === 0) {
      errors.push({ msg: "Cover Photo Is required" });
    } else {
      const { type } = files.image;
      const split = type.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        errors.push({ msg: `${extension} is not a valid` });
      } else {
        files.image.name = uuidv4() + "." + extension;
      }
    }
    const checkSlug = await postSchema.findOne({ slug });
    if (checkSlug) {
      errors.push({ msg: "Please choose a unique URL" });
    }
    if (errors.length !== 0) {
      return res.status(400).json({ errors, files });
    } else {
      const newPath =
        __dirname + `./../../frontend/public/images/${files.image.name}`;
      fs.copyFile(files.image.path, newPath, async (error) => {
        if (!error) {
          try {
            const response = await postSchema.create({
              title,
              body,
              image: files.image.name,
              description,
              category,
              slug,
              userName: name,
              userId: id,
            });
            return res.status(200).json({
              msg: "Your Post have been submitted successfully",
              response,
            });
          } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message });
          }
        }
      });
    }
  });
};

// fetch post
const fetchPosts = async (req, res) => {
  const id = req.params.id;
  const page = req.params.page;
  const perPage = 5;
  const skip = (page - 1) * perPage;

  try {
    const count = await postSchema.find({ userId: id }).countDocuments();
    const response = await postSchema
      .find({ userId: id })
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ postData: response, count, perPage });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

// fetch single post
const fetchSinglePost = async (req, res) => {
  const id = req.params.id;
  try {
    const singlePost = await postSchema.find({_id: id})
    return res.status(200).json({singlePost})
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports = {
  createPost,
  fetchPosts,
  fetchSinglePost,
};

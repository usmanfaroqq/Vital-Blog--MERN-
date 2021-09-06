const { body, validationResult } = require("express-validator");
const userSchema = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// jwt TokenFunctions
const createToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET, {
    expiresIn: "7d",
  });
};

module.exports.registerValidation = [
  body("name").not().isEmpty().trim().withMessage("Name is required"),
  body("email").not().isEmpty().trim().withMessage("Email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be at least 6 characters"),
];

module.exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json(errors.array());
  }
  try {
    const checkUser = await userSchema.findOne({ email });
    if (checkUser) {
      // Checking user is existed or not
      return res
        .status(400)
        .json({ errors: [{ msg: "User already registered" }] });
    }
    // Encrypting Password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    try {
      // Posting Register data to database
      const user = await userSchema.create({ name, email, password: hash, });
      const jwtToken = createToken(user);
      return res
        .status(200)
        .json({ msg: "Your account has been created", jwtToken });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

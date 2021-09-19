const express = require("express");
const ProfileControllers = require("../controllers/profileControllers");
const profileRouter = express.Router();

profileRouter.post("/update-userName", ProfileControllers.changeUserName);




module.exports = profileRouter;
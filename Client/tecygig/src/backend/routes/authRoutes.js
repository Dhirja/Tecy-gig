const express = require("express");

const {
  signupController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authmiddleware = require("../middlewares/authmiddleware");

const router = express.Router();

//signup || POST
router.post("/signup", signupController);
router.post("/login", loginController);
//GET CURRENT USER || GET
router.get("/current-user", authmiddleware, currentUserController);

module.exports = router;

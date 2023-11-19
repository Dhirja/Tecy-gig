const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the email is already registered
    const existingUser = await authModel.findOne({ email });
    // const adminRolecount = await authModel.findOne({ role });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }
    //  else if (adminRolecount.role != "admin") {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Admin role is already exist" });
    // }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the provided information
    const user = new authModel({
      name,
      email,
      password: hashedPassword,
      role, // Assign the role provided in the request
    });

    await user.save();
    res
      .status(201)
      .send({ success: true, message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred during registration" });
  }
};

// login callback

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ error: "fill all the details" });
    }

    const user = await authModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    // check role
    // if (user.role !== req.body.role) {
    //   return res.status(500).send({
    //     success: false,
    //     message: "role dosent match",
    //   });
    // }
    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    });
  }
};

const currentUserController = async (req, res) => {
  try {
    const user = await authModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
      error,
    });
  }
};

//DELETE DONAR
const deleteloginController = async (req, res) => {
  try {
    await authModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: " Record Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while logout ",
      error,
    });
  }
};
module.exports = {
  signupController,
  loginController,
  currentUserController,
  deleteloginController,
};

const userModel = require("../models/userModel");

const registerController = async (req, res) => {

try {
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Registerd Successfully",
      user,
    });
    
} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
}
}
module.exports = { registerController}
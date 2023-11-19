const userModel = require("../models/userModel");

const customarController = async (req, res) => {
  try {
    const getCustomarQuery = await userModel.find();

    res.status(201).send({ status: 201, getCustomarQuery });
  } catch (error) {
    res.status(401).send({ status: 401, error });
  }
};

const deleteCustamarController = async (req, res) => {
  try {
    const { id } = req.params;

    const dltUser = await userModel.findByIdAndDelete({ _id: id });

    res
      .status(201)
      .json({ status: 201, message: "user deleted successfully", dltUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};
module.exports = { customarController, deleteCustamarController };


const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome test user",
      success: true,
    });
  };
  
  module.exports = { testController };
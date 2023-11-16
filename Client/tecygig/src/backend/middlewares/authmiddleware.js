const JWT = require("jsonwebtoken");
// const authModel = require("../models/authModel");
// const keysecret = "dhiraj1996";

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;

//     const verifytoken = jwt.verify(token, keysecret);

//     const rootUser = await authModel.findOne({ _id: verifytoken._id });

//     if (!rootUser) {
//       throw new Error("user not found");
//     }

//     req.token = token;
//     req.rootUser = rootUser;
//     req.userId = rootUser._id;

//     next();
//   } catch (error) {
//     res
//       .status(401)
//       .json({ status: 401, message: "Unauthorized no token provide" });
//   }
// };

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failedd",
    });
  }
};

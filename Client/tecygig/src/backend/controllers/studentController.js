const PdfDetails = require("../models/studenModel");
// const moment = require("moment");

const studentController = async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfDetails.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
};
module.exports = { studentController };

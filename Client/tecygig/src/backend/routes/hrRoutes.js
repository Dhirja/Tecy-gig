const {
  createJobController,
  getAllJobsController,
  getResumeController,
  deleteResumeController,
} = require("../controllers/hrjobController");
const express = require("express");
const router = express.Router();

router.post("/createjob", createJobController);
router.get("/getalljobs", getAllJobsController);
router.get("/getResume", getResumeController);
router.delete("/:id", deleteResumeController);

module.exports = router;

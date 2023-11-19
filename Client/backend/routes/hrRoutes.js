const {
  createJobController,
  getAllJobsController,
  deletejobController,
  getResumeController,
  deleteResumeController,
} = require("../controllers/hrjobController");
const express = require("express");
const router = express.Router();

router.post("/createjob", createJobController);
router.get("/getalljobs", getAllJobsController);
router.delete("/:id", deletejobController);

router.get("/getResume", getResumeController);
router.delete("/resume-delete/:resume_id", deleteResumeController);

module.exports = router;

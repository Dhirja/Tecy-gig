const Job = require("../models/jobModel");
const PdfDetails = require("../models/studenModel");

// Controller to handle form submission and saving a new job
const createJobController = async (req, res) => {
  try {
    // Extract form data from the request body
    const { position, experience, openings } = req.body;

    // Create a new job instance
    const newJob = new Job({
      position,
      experience,
      openings,
    });

    // Save the job to the database
    const savedJob = await newJob.save();

    res.status(201).json({ message: "jobs data saved successfuly", savedJob });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Controller to retrieve all jobs
const getAllJobsController = async (req, res) => {
  try {
    // Retrieve all jobs from the database
    const jobs = await Job.find();

    res.status(200).json({ message: "data get successful", jobs });
  } catch (error) {
    console.error("Error getting jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// controller to dele jobs
const deletejobController = async (req, res) => {
  try {
    const { id } = req.params;

    const dltUser = await Job.findByIdAndDelete({ _id: id });

    res
      .status(201)
      .json({ status: 201, message: "user deleted successfully", dltUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};

// controller to get resumes
const getResumeController = async (req, res) => {
  try {
    const getResume = await PdfDetails.find();

    res
      .status(201)
      .json({ status: 201, message: "data get successful", getResume });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};
// controller to delete resumes
const deleteResumeController = async (req, res) => {
  try {
    const { resume_id } = req.params;

    const dltUser = await PdfDetails.findByIdAndDelete({ _id: resume_id });

    res
      .status(201)
      .json({ status: 201, message: "user deleted successfully", dltUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};

module.exports = {
  createJobController,
  deleteResumeController,
  getAllJobsController,
  getResumeController,
  deletejobController,
};

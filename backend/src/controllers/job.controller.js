import Job from "../models/Job.js";

/**
 * @desc    Create a new job
 * @route   POST /api/jobs
 * @access  Employer only
 */
export const createJob = async (req, res) => {
  try {
    const employerId = req.user.id;
    const {
      title,
      description,
      trade,
      minPay,
      maxPay,
      location,
      duration,
    } = req.body;

    if (!title || !trade || !minPay || !maxPay) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }

    const job = await Job.create({
      employerId,
      title,
      description,
      trade,
      minPay,
      maxPay,
      location,
      duration,
    });

    res.status(201).json({
      message: "Job posted successfully",
      job,
    });
  } catch (error) {
    console.error("Create job error:", error);
    res.status(500).json({
      message: "Server error while creating job",
    });
  }
};

/**
 * @desc    Get jobs posted by employer
 * @route   GET /api/jobs/employer
 * @access  Employer only
 */
export const getEmployerJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ employerId: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch employer jobs",
    });
  }
};

/**
 * @desc    Get open jobs for workers
 * @route   GET /api/jobs/worker
 * @access  Worker only
 */
export const getWorkerJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: "open" }).sort({
      createdAt: -1,
    });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
    });
  }
};

/**
 * @desc    Get single job
 * @route   GET /api/jobs/:id
 * @access  Protected
 */
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "employerId",
      "name email"
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch job",
    });
  }
};

export const getAllOpenJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: "open" })
      .populate("employerId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
    });
  }
};

import HireRequest from "../models/HireRequest.js";
import Job from "../models/Job.js";

/**
 * @desc    Create hire request
 * @route   POST /api/hire
 * @access  Employer only
 */
export const createHireRequest = async (req, res) => {
  try {
    const employerId = req.user.id;
    const { jobId, workerId } = req.body;

    if (!jobId || !workerId) {
      return res.status(400).json({
        message: "jobId and workerId are required",
      });
    }

    // Ensure job belongs to employer
    const job = await Job.findOne({ _id: jobId, employerId });
    if (!job) {
      return res.status(403).json({
        message: "Not authorized to hire for this job",
      });
    }

    const hireRequest = await HireRequest.create({
      jobId,
      employerId,
      workerId,
    });

    res.status(201).json({
      message: "Hire request sent",
      hireRequest,
    });
  } catch (error) {
    console.error("Create hire error:", error);
    res.status(500).json({
      message: "Failed to create hire request",
    });
  }
};

/**
 * @desc    Worker accepts hire
 * @route   PATCH /api/hire/:id/accept
 * @access  Worker only
 */
export const acceptHireRequest = async (req, res) => {
  try {
    const workerId = req.user.id;

    const hireRequest = await HireRequest.findOne({
      _id: req.params.id,
      workerId,
      status: "pending",
    });

    if (!hireRequest) {
      return res.status(404).json({
        message: "Hire request not found",
      });
    }

    hireRequest.status = "accepted";
    await hireRequest.save();

    // Update job status
    await Job.findByIdAndUpdate(hireRequest.jobId, {
      status: "hired",
    });

    res.status(200).json({
      message: "Hire request accepted",
      hireRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to accept hire request",
    });
  }
};

/**
 * @desc    Worker rejects hire
 * @route   PATCH /api/hire/:id/reject
 * @access  Worker only
 */
export const rejectHireRequest = async (req, res) => {
  try {
    const workerId = req.user.id;

    const hireRequest = await HireRequest.findOne({
      _id: req.params.id,
      workerId,
      status: "pending",
    });

    if (!hireRequest) {
      return res.status(404).json({
        message: "Hire request not found",
      });
    }

    hireRequest.status = "rejected";
    await hireRequest.save();

    res.status(200).json({
      message: "Hire request rejected",
      hireRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to reject hire request",
    });
  }
};

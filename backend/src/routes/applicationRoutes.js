import express from "express";
import Application from "../models/Application.js";
import Job from "../models/Job.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Worker applies to job
router.post("/apply", protect, async (req, res) => {
  try {
    console.log("APPLY BODY:", req.body);
    console.log("USER:", req.user);

    if (req.user.role !== "worker") {
      return res.status(403).json({ message: "Only workers can apply" });
    }

    const { jobId } = req.body;
     console.log("JOB ID:", jobId);


    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const alreadyApplied = await Application.findOne({
      job: jobId,
      worker: req.user.id,
    });

    if (alreadyApplied) {
      return res.status(400).json({ message: "Already applied to this job" });
    }

    const application = await Application.create({
      job: jobId,
      worker: req.user.id,
      employer: job.employer,
    });

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: "Failed to apply" });
  }
});

// Employer views applications for their jobs
router.get("/employer", protect, async (req, res) => {
  try {
    if (req.user.role !== "employer") {
      return res.status(403).json({ message: "Only employers allowed" });
    }

    const applications = await Application.find({
      employer: req.user.id,
    })
      .populate("job", "title location trade")
      .populate("worker", "name"); // ❌ phone NOT included

    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch applications" });
  }
});

// Employer hires a worker
router.patch("/:id/hire", protect, async (req, res) => {
  try {
    if (req.user.role !== "employer") {
      return res.status(403).json({ message: "Only employers can hire" });
    }

    const application = await Application.findById(req.params.id)
      .populate("worker", "name phone");

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (application.employer.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized action" });
    }

    application.status = "hired";
    await application.save();

    res.json({
      message: "Worker hired successfully",
      application,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to hire worker" });
  }
});


export default router;

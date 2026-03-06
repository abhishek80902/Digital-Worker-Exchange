import express from "express";
import {
  createJob,
  getEmployerJobs,
  getWorkerJobs,
  getJobById,
  getAllOpenJobs
} from "../controllers/job.controller.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllOpenJobs);

// Create job (employer)
router.post("/", protect, authorize("employer"), createJob);

// Employer dashboard jobs
router.get("/employer", protect, authorize("employer"), getEmployerJobs);

// Worker dashboard jobs
router.get("/worker", protect, getWorkerJobs);

// Get single job
router.get("/:id", getJobById);

export default router;

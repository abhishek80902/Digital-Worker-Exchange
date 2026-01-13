import express from "express";
import {
  upsertWorkerProfile,
  getAllWorkers,
  getWorkerById,
} from "../controllers/worker.controller.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

// Worker creates/updates profile
router.post(
  "/profile",
  protect,
  authorize("worker"),
  upsertWorkerProfile
);

// Employer browses workers
router.get(
  "/",
  protect,
  authorize("employer"),
  getAllWorkers
);

// View single worker profile
router.get("/:id", protect, getWorkerById);

export default router;

import express from "express";
import {
  createHireRequest,
  acceptHireRequest,
  rejectHireRequest,
} from "../controllers/hire.controller.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

// Employer sends hire request
router.post("/", protect, authorize("employer"), createHireRequest);

// Worker accepts hire
router.patch(
  "/:id/accept",
  protect,
  authorize("worker"),
  acceptHireRequest
);

// Worker rejects hire
router.patch(
  "/:id/reject",
  protect,
  authorize("worker"),
  rejectHireRequest
);

export default router;

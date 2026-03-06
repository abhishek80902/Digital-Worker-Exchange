import express from "express";
import {
  getConversation,
  sendMessage,
} from "../controllers/chat.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Get or create conversation
router.get(
  "/:jobId/:otherUserId",
  protect,
  getConversation
);

// Send message
router.post(
  "/:conversationId/message",
  protect,
  sendMessage
);

export default router;

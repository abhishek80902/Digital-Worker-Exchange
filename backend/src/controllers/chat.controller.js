import Conversation from "../models/Conversation.js";

/**
 * @desc    Get or create conversation
 * @route   GET /api/chat/:jobId/:otherUserId
 * @access  Protected
 */
export const getConversation = async (req, res) => {
  try {
    const userId = req.user.id;
    const { jobId, otherUserId } = req.params;

    let conversation = await Conversation.findOne({
      jobId,
      participants: { $all: [userId, otherUserId] },
    }).populate("messages.senderId", "name");

    if (!conversation) {
      conversation = await Conversation.create({
        jobId,
        participants: [userId, otherUserId],
        messages: [],
      });
    }

    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get conversation",
    });
  }
};

/**
 * @desc    Send message
 * @route   POST /api/chat/:conversationId/message
 * @access  Protected
 */
export const sendMessage = async (req, res) => {
  try {
    const userId = req.user.id;
    const { conversationId } = req.params;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        message: "Message text required",
      });
    }

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    conversation.messages.push({
      senderId: userId,
      text,
    });

    await conversation.save();

    res.status(200).json({
      message: "Message sent",
      conversation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send message",
    });
  }
};

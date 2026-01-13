import WorkerProfile from "../models/WorkerProfile.js";

/**
 * @desc    Create or update worker profile
 * @route   POST /api/workers/profile
 * @access  Worker only
 */
export const upsertWorkerProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      trade,
      skills,
      experienceYears,
      location,
      baseAsk,
      isAvailable,
    } = req.body;

    if (!trade || !skills || !experienceYears || !location || !baseAsk) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    const profile = await WorkerProfile.findOneAndUpdate(
      { userId },
      {
        trade,
        skills,
        experienceYears,
        location,
        baseAsk,
        isAvailable,
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Worker profile saved successfully",
      profile,
    });
  } catch (error) {
    console.error("Worker profile error:", error);
    res.status(500).json({
      message: "Server error while saving profile",
    });
  }
};

/**
 * @desc    Get all workers (for employer)
 * @route   GET /api/workers
 * @access  Employer only
 */
export const getAllWorkers = async (req, res) => {
  try {
    const workers = await WorkerProfile.find()
      .populate("userId", "name email")
      .sort({ rating: -1 });

    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch workers",
    });
  }
};

/**
 * @desc    Get single worker profile
 * @route   GET /api/workers/:id
 * @access  Protected
 */
export const getWorkerById = async (req, res) => {
  try {
    const worker = await WorkerProfile.findOne({
      userId: req.params.id,
    }).populate("userId", "name email");

    if (!worker) {
      return res.status(404).json({
        message: "Worker profile not found",
      });
    }

    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch worker",
    });
  }
};

import mongoose from "mongoose";

const workerProfileSchema = new mongoose.Schema(
  {
    // Link to User collection
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // Professional details
    trade: {
      type: String,
      required: true, // Electrician, Plumber, Driver, etc.
    },

    skills: [
      {
        type: String,
        required: true,
      },
    ],

    experienceYears: {
      type: Number,
      required: true,
      min: 0,
      max: 50,
    },

    // Location & availability
    location: {
      type: String,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    // Trust & reputation
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    completedJobs: {
      type: Number,
      default: 0,
    },

    // Expected pay
    baseAsk: {
      type: Number,
      required: true, // ₹ per day
    },
  },
  { timestamps: true }
);

export default mongoose.model("WorkerProfile", workerProfileSchema);
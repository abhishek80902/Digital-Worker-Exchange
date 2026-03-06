import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    // Who posted the job
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Job details
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    trade: {
      type: String,
      required: true, // Electrician, Plumber, etc.
    },

    // Pay range
    minPay: {
      type: Number,
      required: true,
    },

    maxPay: {
      type: Number,
      required: true,
    },

    // Job status lifecycle
    status: {
      type: String,
      enum: ["open", "hired", "completed"],
      default: "open",
    },

    // Optional metadata
    location: {
      type: String,
    },

    duration: {
      type: String, // e.g., "2 days", "1 week"
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);

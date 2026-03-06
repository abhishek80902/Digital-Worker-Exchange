import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
    status: {
      type: String,
      enum: ["applied", "hired", "rejected"],
      default: "applied",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema); 

export default Application;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import workerRoutes from "./routes/worker.routes.js";
import jobRoutes from "./routes/job.routes.js";
import hireRoutes from "./routes/hire.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import applicationRoutes from "./routes/applicationRoutes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/hire", hireRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Digital Worker Exchange API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

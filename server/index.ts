import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

// middleware`
app.use(cors());
app.use(express.json());

// routes
app.use("/students", studentRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Working Fine");
});

// server start
const PORT = 5020;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
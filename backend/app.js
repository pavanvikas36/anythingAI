require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(helmet());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/task", taskRouter);

app.listen(5000, () => console.log("Server running on port 5000"));

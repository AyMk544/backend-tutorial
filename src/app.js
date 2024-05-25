import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" })); // input data format is json with a set limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // helps in understanding different types of url
app.use(express.static("public")) // static files will be stored in public folder
app.use(cookieParser())

// import routes
import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter);

export { app }
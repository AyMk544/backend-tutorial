import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

const PORT = process.env.PORT;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR!!: ", error);
            throw error;
        })

        app.listen(PORT || 8000, () => {
            console.log(`Server is running at port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed: ", err);
    });

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR!!: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})()
*/
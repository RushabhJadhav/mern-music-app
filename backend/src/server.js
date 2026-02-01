import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello World"})
});

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started on PORT ${process.env.PORT}`)
    })
});
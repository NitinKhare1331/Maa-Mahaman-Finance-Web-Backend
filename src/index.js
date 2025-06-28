import express from "express";
import connectDB from "./config/dbConfig.js";

const PORT = 5000;

const app = express();

app.get('/ping', (req, res) => {
    return res.json({message: "pong"})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
})
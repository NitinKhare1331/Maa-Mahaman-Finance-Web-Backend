import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./router/apiRouter.js";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://maamahamayafinance.netlify.app"
    ],
    credentials: true,
    exposedHeaders: ['authorization']
}));


app.use(express.json()); //middleware to parse json data(serializer, deserializer)
app.use(express.text()); //deserialization of text, json, urlencoded
app.use(express.urlencoded({ extended: true })); //app.use is global middleware

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message: "pong"})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
})
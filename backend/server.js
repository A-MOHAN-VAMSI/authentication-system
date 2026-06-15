const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

console.log("JWT:", process.env.JWT_SECRET);
console.log("MONGO:", process.env.MONGO_URI);
console.log(process.env.JWT_SECRET);
const authRoutes = require("./routes/authRoutes");


const app = express();

app.use(cors({
    origin: [
        "https://authentication-system-vert.vercel.app",
        "https://authentication-application-frontend.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Authentication API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
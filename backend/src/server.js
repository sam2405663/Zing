import express from "express";
//const mongoose = require('mongoose');
import dotenv from'dotenv';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";


dotenv.config();

const app = express();
const _dirname = path.resolve();



// Middleware
//app.use(express.json());

// Database Connection
//mongoose.connect(process.env.MONGO_URI)
 // .then(() => console.log("Zing Database Connected"))
 // .catch(err => console.log("Conn Error:", err));
 app.use("/api/auth", authRoutes);
 app.use("/api/messages", messageRoutes);

 if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../frontend/dist")));

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });

 };


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Zing server running on port ${PORT}`));
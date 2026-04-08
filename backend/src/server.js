import express from "express";
//const mongoose = require('mongoose');
import dotenv from'dotenv';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


dotenv.config();
const app = express();



// Middleware
//app.use(express.json());

// Database Connection
//mongoose.connect(process.env.MONGO_URI)
 // .then(() => console.log("Zing Database Connected"))
 // .catch(err => console.log("Conn Error:", err));
 app.use("/api/auth", authRoutes);
 app.use("/api/messages", messageRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Zing server running on port ${PORT}`));
// Dependencies:
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Express Instance
const server = express();

// Middlewares
server.use(express.json());
server.use(cookieParser());
server.use(express.static("public"));

server.use(cors({
    origin: ["http://localhost:5173", "*"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));

// User Routing
const userRoutes = require("./routes/user-routes");
server.use("/", userRoutes);

// Listening to server
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

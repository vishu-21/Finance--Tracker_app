
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const server = express();

server.use(express.json());

if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

server.use("/api/v1/transactions", transactions);

//static file


const PORT = process.env.PORT || 8080;

server.listen(PORT, console.log(`server is running on ${PORT}`.blue.italic));

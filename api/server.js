const express = require("express");
const helmet = require("helmet");

const fruitsRouter = require("../fruits/fruits-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/fruits", fruitsRouter);

server.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

module.exports = server;

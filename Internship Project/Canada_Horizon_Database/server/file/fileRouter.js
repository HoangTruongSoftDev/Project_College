const express = require("express");
const { fileController } = require("../controllers/fileController");

const fileRouter = express.Router();

fileRouter.post("/file", fileController);
module.exports = fileRouter;
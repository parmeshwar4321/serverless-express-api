const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();


  router.get("/hello", (req, res, next) => {
    return res.status(200).json({
      message: "Hello from path!",
    });
  });
  

  module.exports = router;
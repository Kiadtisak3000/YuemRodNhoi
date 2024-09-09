require("dotenv").config()
const url = process.env.frontendUrl
exports.cors = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", url);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Option, Authorization"
    );
  
    return next();
  }
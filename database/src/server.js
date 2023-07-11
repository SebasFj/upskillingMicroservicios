const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(require("./routes"))

server.use((err,req,res,next)=>{
    res.status(err.statusCode).json({
        error: true,
        message: err.message,
        statusCode: err.statusCode
    })
})

module.exports = server;
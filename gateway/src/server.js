const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));

server.use(require("./routes"));

server.use((err,req,res,next)=>{
    res.status(400).send({
        error: true,
        message: err.message
    })
})

module.exports = server;
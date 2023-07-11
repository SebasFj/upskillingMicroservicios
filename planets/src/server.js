const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use((err,req,res,next)=>{
    res.status(err.response?.data.statusCode || err.statusCode).send({
        error:true,
        message: err.response?.data.message || err.message
    })
})

module.exports = server;
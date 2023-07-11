const server = require("./src/server");
require("dotenv").config();
const axios = require("axios")

const {PORT} = process.env;

// axios.defaults.baseURL = "http://localhost:3004/Film";
axios.defaults.baseURL = "http://database:3004/Film";

server.listen(PORT, ()=>{
    console.log(`films on fire on port ${PORT}`)
});
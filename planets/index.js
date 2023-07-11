const server = require("./src/server");
const axios = require("axios")

require("dotenv").config();
const {PORT} = process.env;

axios.defaults.baseURL = "http://database:3004/Planet";
// axios.defaults.baseURL = "http://localhost:3004/Planet";

server.listen(PORT, ()=>{
    console.log(`planets on fire on port ${PORT}`)
});
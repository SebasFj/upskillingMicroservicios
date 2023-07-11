const server = require("./src/server");
const axios = require("axios");

require("dotenv").config();

const {PORT} = process.env;

// axios.defaults.baseURL = `http://localhost:3004/Character`;
axios.defaults.baseURL = `http://database:3004/Character`;

server.listen(PORT, ()=>{
    console.log(`characters on fire on port ${PORT}`)
});
const axios = require("axios");

module.exports = async (character) => {
    let {data} = await axios.post("/",character)
    return data
}
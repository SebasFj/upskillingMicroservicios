const axios = require("axios")

module.exports = async (object) => {
    const {data} = await axios.post("/",object)
    return data
}
const axios = require("axios");
const ClienteError = require("../../utils/errors")

module.exports = async () => {
   let {data} = await axios.get("/")
   return data
}
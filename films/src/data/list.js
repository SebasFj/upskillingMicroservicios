const axios = require("axios")
const ClienteError = require("../../utils/errors")

module.exports = async () => {
    const {data} = await axios("/");
    return data;
}
const {response} = require("../../utils")
const Films = require("../data")

module.exports = async (req, res) => {
    const films = await Films.list();
    response(res, 200, films)
}
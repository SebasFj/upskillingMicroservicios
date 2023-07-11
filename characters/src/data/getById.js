const axios = require("axios")

module.exports = async (_id) => {
    let {data} = await axios(`/${_id}`)
    return data
}
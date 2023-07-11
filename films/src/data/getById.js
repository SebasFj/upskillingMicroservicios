const axios = require("axios")

module.exports = async (_id) => {
    const {data} = await axios(`/${_id}`);
    return data;
}
const axios = require("axios");

module.exports = {
    list: async () => {
        const {data} = await axios("/")
        return data;
    },
    create: async (planet) => {
        const {data} = await axios.post("/", planet);
        return data;
    },
    getById: async (id) => {
        const {data} = await axios(`/${id}`);
        return data;
    }
}
const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/envs")
const schemas = require("./schemas")

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
    Character: conn.model("Character", schemas.characterSchema),
    Planet: conn.model("Planet", schemas.planetSchema),
    Film: conn.model("Film", schemas.filmSchema)
}

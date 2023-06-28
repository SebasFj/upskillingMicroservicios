const characters = require("./characters.json")
const {ClientError} = require("../../utils/errors")

module.exports = {
    list: async () => {
        return characters;
    },
    create: async () => {
        throw new ClientError ("Ocurrió un error al crear el personaje",401)
    }
}
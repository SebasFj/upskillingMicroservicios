const films = require("./films.json")
const {ClientError} = require("../../utils/errors")

module.exports = {
    list: async () => {
        return films;
    },
    create: async () => {
        throw new ClientError("Ocurrió un error al crear el personaje",400)
    }
}
const planets = require("./planets.json")
const {ClientError} = require("../../utils/errors")

module.exports = {
    list: async () => {
        return planets;
    },
    create: async () => {
        throw new ClientError ("Ocurrió un error al crear el planeta" , 401)
    }
}
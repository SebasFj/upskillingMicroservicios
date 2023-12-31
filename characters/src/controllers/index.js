const {catchedAsync} = require("../../utils")

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacters: catchedAsync(require("./createCharacter")),
    getById: catchedAsync(require("./getById"))
}
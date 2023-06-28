const {ClientError} = require("../utils/errors")

module.exports = (req, res, next) => {
    const {name} = req.body;
    if (name) return next();
    throw new ClientError("faltó el nombre del caracter", 401)
}
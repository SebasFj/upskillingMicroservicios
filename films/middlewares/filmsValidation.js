const {ClientError} = require("../utils/errors")

module.exports = (req, res, next) => {
    const {title} = req.body;
    if (title) return next();
    throw new ClientError("faltó el título del films", 401)
}
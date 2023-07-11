module.exports = (req,res,next) => {
    if (["characters","planets","films"].includes(req.path.split("/")[1])){
        return next();
    }
    const error = new Error (`No existe la ruta ${req.path}`)
    next(error)
}
module.exports = (controller) => (req,res,next) =>
controller(req,res).catch(err=>next(err))
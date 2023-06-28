module.exports = (funct)=>(req,res,next)=>
    funct(req,res).catch((err)=>next(err));

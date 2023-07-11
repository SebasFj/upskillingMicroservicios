const {Router} = require("express")
const store = require("../database")
const middlewares = require("../middlewares")
const {response} = require("../utils")
const {catchedAsync} = require("../utils")
const ClientError = require("../utils/errors")

const router = Router();

router.get(`/:model`,middlewares.validateModel, catchedAsync(async (req,res)=>{
    let {model} = req.params
    let data = await store[model].list()
    response(res, 200, data)
}))

router.get(`/:model/:id`,middlewares.validateModel, catchedAsync(async (req,res)=>{
    let {model, id} = req.params
    let data = await store[model].get(id)
    if (data){
        response(res, 200, data)
    }else{
        throw new ClientError("No existe el ID", 400)
    }
}))

router.post(`/:model`,middlewares.validateModel, catchedAsync(async (req,res)=>{
    let {model} = req.params
    let data = await store[model].insert(req.body)
    response(res, 200, data)
}))


module.exports = router
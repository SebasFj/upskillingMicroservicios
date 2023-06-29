const {Router} = require("express");
const controllers = require("./controllers")

const router = Router();

router.use("/",controllers.getProxy("films"))

module.exports = router;
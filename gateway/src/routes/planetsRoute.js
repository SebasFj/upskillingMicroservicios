const {Router} = require("express");
const controllers = require("./controllers")

const router = Router();

router.use("/",controllers.getProxy("planets"))

module.exports = router;
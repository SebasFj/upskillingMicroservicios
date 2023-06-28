const {Router} = require("express");
const controllers = require("./controllers")

const router = Router();

router.use("/",controllers.getProxy("characters"))

module.exports = router;
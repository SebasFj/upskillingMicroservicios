const {Router} = require("express");
const controllers = require("./controllers")
const bodyParser = require("body-parser")

const router = Router();

router.use(bodyParser.json())
router.use("/",controllers.getProxy("films"))

module.exports = router;
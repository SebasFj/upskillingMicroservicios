const {Router} = require("express");
const middlewares = require("../middlewares")
const router = Router();

router.use(middlewares.validatePath)
router.use("/characters",require("./charactersRoute"))
router.use("/films",require("./filmsRoute"))
router.use("/planets",require("./planetsRoute"))

module.exports = router;
const {Router} = require("express");

const router = Router();


router.use("/characters",require("./charactersRoute"))
router.use("/films",require("./filmsRoute"))
router.use("/planets",require("./planetsRoute"))

module.exports = router;
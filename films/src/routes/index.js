const {Router} = require("express");
const controllers = require("../controllers")
const {filmsValidation} = require("../../middlewares")

const router = Router();

router.get("/", controllers.getFilms)
router.post("/", filmsValidation, controllers.createFilms)



module.exports = router;
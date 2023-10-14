const express = require("express")
controllerAuth = require("../controller/auth.controller")

const router = express.Router()


router.get("/", controllerAuth.home)


router.get("/register", controllerAuth.register)

router.post("/register", controllerAuth.registerPage)





 module.exports = router;
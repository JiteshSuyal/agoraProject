const router = require("express").Router();
const controller = require("../controller/user.controller");
const controllerToken = require("../../src/controller/token.controller")


router.post("/create",controller.createUser);
router.post("/createToken",controllerToken.createToken);
router.get("/getToken",controllerToken.getToken)

module.exports = router;
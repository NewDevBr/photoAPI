const router = require("express").Router();
const vldt = require("../validators/users.js");
const ctrl = require("../controller/users.js");
const hlprs = require("../helpers/helpers.js");
const verifyToken = require("../validators/verifyLogin.js");

router.post("/login", vldt.loginParams, ctrl.sendToken);
router.post("/", vldt.newUserParams, hlprs.hashPassword, ctrl.newUser);
router.put("/", verifyToken, hlprs.hashPassword, ctrl.changeUser);
router.delete("/", verifyToken, ctrl.deleteUser);

module.exports = router;
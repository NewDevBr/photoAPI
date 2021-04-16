const router = require("express").Router();
const verifyToken = require("../validators/verifyLogin.js");
const multer = require("../helpers/multer.js");
const ctrl = require("../controller/photos.js")

router.get("/", verifyToken, ctrl.getAll);
router.post("/", verifyToken, multer.upload.single("img"), ctrl.savePhoto);
router.delete("/onePhoto/:idPhoto", verifyToken, ctrl.delOnePhoto);

module.exports = router;
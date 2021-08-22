import express from "express";
import validate from "express-validation";
import apiMiddleware from "../middleware/apiAuth";
import * as userController from "../controllers/user/user.controller";
import * as userValidator from "../controllers/user/user.validator";
import * as antrianController from "../controllers/antrian/antrian.controller";
import * as praktikController from "../controllers/praktik/praktik.controller";
import * as puskesmasController from "../controllers/puskesmas/puskesmas.controller";
const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get("/me", apiMiddleware, userController.profile);

// router.post(
//   '/changePassword',
//   validate(userValidator.changePassword),
//   userController.changePassword,
// );

router.post("/login", validate(userValidator.login), userController.login);
router.post("/register", validate(userValidator.register), userController.register);
router.get("/praktik/list", apiMiddleware, praktikController.list);
router.get("/antrian/list", apiMiddleware, antrianController.listAntrianClient);
router.post("/antrian/create", apiMiddleware, antrianController.create);
router.get("/puskesmas/list", apiMiddleware, puskesmasController.list);

module.exports = router;

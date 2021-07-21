import express from "express";
import validate from "express-validation";
import apiMiddleware from "../middleware/apiAuth";
import * as userController from "../controllers/user/user.controller";
import * as userValidator from "../controllers/user/user.validator";

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

module.exports = router;

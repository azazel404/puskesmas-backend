import express from "express";
import * as userController from "../controllers/user/user.controller";
import * as dokterController from "../controllers/dokter/dokter.controller";
import * as puskesmasController from "../controllers/puskesmas/puskesmas.controller";
import * as polisController from "../controllers/polis/polis.controller";
import * as praktikController from "../controllers/praktik/praktik.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get("/user/list", userController.list);
router.post("/user/create", userController.create);
router.put("/user/update/:id", userController.update);
router.delete("/user/delete/:id", userController.deleted);

router.get("/dokter/list", dokterController.list);
router.post("/dokter/create", dokterController.create);
router.put("/dokter/update/:id", dokterController.update);
router.delete("/dokter/delete/:id", dokterController.deleted);

router.get("/puskesmas/list", puskesmasController.list);
router.post("/puskesmas/create", puskesmasController.create);
router.put("/puskesmas/update/:id", puskesmasController.update);
router.delete("/puskesmas/delete/:id", puskesmasController.deleted);

router.get("/polis/list", polisController.list);
router.post("/polis/create", polisController.create);
router.put("/polis/update/:id", polisController.update);
router.delete("/polis/delete/:id", polisController.deleted);

router.get("/praktik/list", praktikController.list);
router.post("/praktik/create", praktikController.create);
router.put("/praktik/update/:id", praktikController.update);
router.delete("/praktik/delete/:id", praktikController.deleted);

module.exports = router;

import express from "express";
import * as userController from "../controllers/user/user.controller";
import * as dokterController from "../controllers/dokter/dokter.controller";
import * as puskesmasController from "../controllers/puskesmas/puskesmas.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get("/allUsers", userController.allUsers);

router.get("/dokter/list", dokterController.list);
router.post("/dokter/create", dokterController.create);
router.put("/dokter/update/:id", dokterController.update);
router.delete("/dokter/delete/:id", dokterController.deleted);

router.get("/puskesmas/list", puskesmasController.list);
router.post("/puskesmas/create", puskesmasController.create);
router.put("/puskesmas/update/:id", puskesmasController.update);
router.delete("/puskesmas/delete/:id", puskesmasController.deleted);

module.exports = router;

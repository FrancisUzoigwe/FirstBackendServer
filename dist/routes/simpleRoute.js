"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const simpleController_1 = require("../controller/simpleController");
const router = (0, express_1.Router)();
router.route("/").get(simpleController_1.view);
router.route("/create").post(simpleController_1.create);
router.route("/delete/:id").delete(simpleController_1.deleteuser);
exports.default = router;

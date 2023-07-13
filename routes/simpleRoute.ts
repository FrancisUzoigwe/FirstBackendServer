import express, {Router} from "express"
import { create, deleteuser, view } from "../controller/simpleController";

const router = Router();

router.route("/").get(view)
router.route("/create").post(create)
router.route("/delete/:id").delete(deleteuser)
export default router;
import e from "express";
import { gettankdetails,posttankdetails } from "../controllers/tank-controller.js";

const router = e.Router();

router.get("/",gettankdetails);
router.post("/",posttankdetails);

export default router;